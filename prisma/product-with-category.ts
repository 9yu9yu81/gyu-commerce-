import { PrismaClient, Prisma } from '@prisma/client'

const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const sneakers = [
  {
    name: `Sneakers 1`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 1 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/71aDzo26koL._UY695_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 2`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 2 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/61TZAGFIXdL._UY695_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 3`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 3 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/71Qhh2NcmEL._UX695_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 4`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 4 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/71puxzVODUL._UX695_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 5`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 5 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/71XCjLmI+6L._UX695_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 6`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 6 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/71jzcrO4F3L._UY695_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 7`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 7 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/71jgR+mHB+S._UY695_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 8`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 8 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/81EwDmNkdFL._UY695_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 9`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 9 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://m.media-amazon.com/images/I/713AUeODxUL._SY695._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Sneakers 10`,
    contents: `{"blocks":[{"key":"62u","text":"Sneakers 10 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: 'https://m.media-amazon.com/images/I/71PbRKwfQQL._UY695_.jpg',
    price: getRandom(100000, 200000),
  },
]

const tShirt = [
  {
    name: `T-Shirt 1`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 1 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/61ZYVRCegtL._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 2`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 2 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/61B5wVOSs4L._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 3`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 3 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/41C5x401H4L._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 4`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 4 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/81avdad6i-L._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 5`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 5 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/819wlkKJe-L._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 6`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 6 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/811WIDxdZxL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 7`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 7 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/81PXKZavJGL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 8`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 8 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/81rnBhj+X3L._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 9`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 9 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/71zxGhr1HQL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `T-Shirt 10`,
    contents: `{"blocks":[{"key":"62u","text":"T-Shirt 10 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: 'https://m.media-amazon.com/images/I/71D7x-psVjL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
]

const pants = [
  {
    name: `Pants 1`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 1 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/91k1qlYD5PL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 2`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 2 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/71whXfzImWL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 3`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 3 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/71xR8WglZFL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 4`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 4 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/81Mvpjm25VL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 5`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 5 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/71TdsJLO5VL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 6`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 6 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/71xh+n+ay3L._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 7`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 7 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/71WpRH-FvtL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 8`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 8 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/61lPRcKu9SL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 9`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 9 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/61Ldg4E2X+L._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Pants 10`,
    contents: `{"blocks":[{"key":"62u","text":"Pants 10 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: 'https://m.media-amazon.com/images/I/81oPw9BISYL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
]

const cap = [
  {
    name: `Cap 1`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 1 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/61Wnz6ycsWL._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 2`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 2 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/91ROq4I8FPL._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 3`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 3 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/71cAyx-L+hL._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 4`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 4 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/71+igK53MWL._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 5`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 5 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/81J3SRaWh4L._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 6`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 6 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/516ANxZFlcL._SY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 7`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 7 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/71Wc0yMTv2L._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 8`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 8 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/41lEBoQfivL.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 9`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 9 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/61zY5Ytuh5L._UX679_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Cap 10`,
    contents: `{"blocks":[{"key":"62u","text":"Cap 10 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: 'https://m.media-amazon.com/images/I/71PbRKwfQQL._UY695_.jpg',
    price: getRandom(100000, 200000),
  },
]

const hoodie = [
  {
    name: `Hoodie 1`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 1 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://m.media-amazon.com/images/I/71yNHr+D2mL._SY879._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 2`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 2 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://m.media-amazon.com/images/I/61GmdA-b2qL._SX679._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 3`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 3 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: 'https://m.media-amazon.com/images/I/716AU4EO1qL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 4`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 4 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://m.media-amazon.com/images/I/71vG7xKgmGL._SY879._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 5`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 5 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: 'https://m.media-amazon.com/images/I/81fs37fA6VL._UY879_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 6`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 6 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://m.media-amazon.com/images/I/717aRXYrpmL._SY879._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 7`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 7 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://m.media-amazon.com/images/I/61NqTfgkpoL._SY879._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 8`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 8 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://m.media-amazon.com/images/I/71qPgjJ7S2L._SY879._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 9`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 9 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://m.media-amazon.com/images/I/71X1QnrWPlL._SY879._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
  {
    name: `Hoodie 10`,
    contents: `{"blocks":[{"key":"62u","text":"Hoodie 10 입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://m.media-amazon.com/images/I/71hsoyT2m6L._SY879._SX._UX._SY._UY_.jpg',
    price: getRandom(100000, 200000),
  },
]
const prisma = new PrismaClient()
const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tShirt,
  ...pants,
  ...cap,
  ...hoodie,
]

async function main() {
  const CATEGORIES = ['SNEAKERS', 'T-SHIRT', 'PANTS', 'CAP', 'HOODIE']

  CATEGORIES.forEach(async (c, i) => {
    const product = await prisma.categories.upsert({
      where: { id: i + 1 },
      update: { name: c },
      create: { name: c },
    })
    console.log(`Created id: ${product.id}`)
  })

  await prisma.products.deleteMany({})

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id: ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
