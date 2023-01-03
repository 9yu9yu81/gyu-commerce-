import { categories, products } from '@prisma/client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input, Pagination, SegmentedControl, Select } from '@mantine/core'
import { CATEGORY_MAP, FILTERS, TAKE } from 'constants/products'
import { IconSearch } from '@tabler/icons'
import useDebounce from 'hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export default function Products() {
  const router = useRouter()
  const [activePage, setPage] = useState(1)
  const [selectedCategory, setCategory] = useState<string>('-1')
  const [selectedFilter, setFilter] = useState<string | null>(FILTERS[0].value)
  const [keyword, setKeyword] = useState<string>('')
  const debouncedKeyword = useDebounce<string>(keyword)

  const { data: categories } = useQuery<
    { items: categories[] },
    unknown,
    categories[]
  >(
    [`/api/get-categories`],
    () => fetch(`/api/get-categories`).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  )

  const { data: total } = useQuery(
    [
      `/api/get-products-count?category=${selectedCategory}&contains=${debouncedKeyword}`,
    ],
    () =>
      fetch(
        `/api/get-products-count?category=${selectedCategory}&contains=${debouncedKeyword}`
      )
        .then((res) => res.json())
        .then((data) => (data.items === 0 ? 1 : Math.ceil(data.items / TAKE)))
  )

  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    [
      `/api/get-products?skip=${
        TAKE * (activePage - 1)
      }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`,
    ],
    () =>
      fetch(
        `/api/get-products?skip=${
          TAKE * (activePage - 1)
        }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`
      ).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <div className="mt-20 mb-20">
      <div className="mb-2">
        <Input
          icon={<IconSearch />}
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
        />
      </div>
      <div className="flex">
        {categories && (
          <div className="mb-2">
            <SegmentedControl
              value={selectedCategory}
              onChange={setCategory}
              data={[
                { label: 'ALL', value: '-1' },
                ...categories.map((category) => ({
                  label: category.name,
                  value: String(category.id),
                })),
              ]}
              color="dark"
            />
          </div>
        )}
        <div className="mb-2 w-28 ml-auto">
          <Select value={selectedFilter} onChange={setFilter} data={FILTERS} />
        </div>
      </div>
      {products && (
        <div className="grid grid-cols-3 gap-3">
          {products.map((item) => (
            <div
              className="ml-auto mr-auto mt-auto"
              style={{ maxWidth: 310 }}
              key={item.id}
              onClick={() => router.push(`/products/${item.id}`)}
            >
              <Image
                className="rounded"
                alt={item.name}
                src={item.image_url ?? ''}
                width={310}
                height={390}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUU1KqBwABqwDj4223ggAAAABJRU5ErkJggg=="
              />
              <div className="flex">
                <span>{item.name}</span>
                <span className="ml-auto">
                  {item.price.toLocaleString('ko-KR')}원
                </span>
              </div>
              <span className="text-zinc-400">
                {CATEGORY_MAP[item.category_id - 1]}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex mt-3">
        {total && (
          <Pagination
            className="m-auto"
            page={activePage}
            onChange={setPage}
            total={total}
          />
        )}
      </div>
    </div>
  )
}
