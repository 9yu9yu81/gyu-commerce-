import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getComment(userId: string, orderItemId: number) {
  try {
    const response = await prisma.comment.findUnique({
      where: {
        orderItemId: orderItemId,
      },
    })
    console.log(response)

    if (response?.userId === userId) return response

    return { message: 'User Id is not matched' }
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
  const session = await getSession({ req })
  const { orderItemId } = req.query

  if (session == null) {
    res.status(200).json({ items: [], message: 'no Session' })
    return
  }
  if (orderItemId == null) {
    res.status(200).json({ items: [], message: 'no orderItemId' })
    return
  }

  try {
    const comment = await getComment(
      String(session.user.id),
      Number(orderItemId)
    )
    res.status(200).json({ items: comment, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: 'Failed' })
  }
}
