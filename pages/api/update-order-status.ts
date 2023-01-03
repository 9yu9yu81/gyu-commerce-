import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateOrderStatus(status: number, id: number) {
  try {
    const response = await prisma.orders.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, status } = JSON.parse(req.body)
  if (id == null) {
    res.status(400).json({ message: 'no Order id' })
    return
  }
  if (status == null) {
    res.status(400).json({ message: 'no status' })
    return
  }
  try {
    const products = await updateOrderStatus(Number(status), Number(id))
    res.status(200).json({ items: products, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: 'Failed' })
  }
}
