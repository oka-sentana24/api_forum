import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.posting.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_posting, title, description, id_pengguna, id_upload } = req.body
    const getResultAll = await prisma.posting.findMany({
      where: {
        id_posting:id_posting,
        title:title,
        description:description,
        id_pengguna:id_pengguna,
        id_upload:id_upload,
      },
    })
    res.json(getResultAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}