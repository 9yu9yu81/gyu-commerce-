import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_hqTMVkOcJTafRALICpvFApnMdyaDTpIxuWUoWxpfsfp',
})

const databaseId = '53966ac2d25343f39404183a6fa86dab'

async function addItem(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    })
    console.log(response)
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query

  if (name == null) {
    return res.status(400).json({ message: 'No name' })
  }

  try {
    await addItem(String(name))
    res.status(200).json({ message: `Success add ${name}` })
  } catch (error) {
    res.status(400).json({ message: `Failed add ${name}` })
  }
}
