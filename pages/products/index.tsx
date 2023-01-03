import { products } from '@prisma/client'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { CATEGORY_MAP, TAKE } from 'constants/products'

export default function Products() {
  const [skip, setSkip] = useState(0)
  const [products, setProducts] = useState<products[]>([])

  useEffect(() => {
    fetch(`/api/get-products?skip=0&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [])

  const getProducts = useCallback(() => {
    const next = skip + TAKE
    fetch(`/api/get-products?skip=${next}&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => {
        const list = products.concat(data.items)
        setProducts(list)
      })
    setSkip(next)
  }, [skip, products])

  return (
    <div className="px-10 mt-10 mb-10">
      {products && (
        <div className="grid grid-cols-3 gap-3">
          {products.map((item) => (
            <div className="m-auto" key={item.id}>
              <Image
                className="rounded"
                alt={item.name}
                src={item.image_url ?? ''}
                width={300}
                height={200}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              />
              <div className="flex">
                <span>{item.name}</span>
                <span className="ml-auto">
                  {item.price.toLocaleString('ko-KR')}원{' '}
                </span>
              </div>
              <span className="text-zinc-400">
                {CATEGORY_MAP[item.category_id - 1]}
              </span>
            </div>
          ))}
        </div>
      )}
      <button
        className="w-full rounded mt-20 bg-zinc-200 p-3 "
        onClick={getProducts}
      >
        더 보기
      </button>
    </div>
  )
}
