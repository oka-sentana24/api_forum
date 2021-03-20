import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.commnet.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_comment, description, id_pengguna, id_posting, id_upload } = req.body
    const getResultAll = await prisma.comment.findMany({
      where: {
        id_comment:id_comment,
        description:description,
        id_pengguna:id_pengguna,
        id_posting:id_posting,
        id_upload:id_upload
      },
    })
    res.json(getResultAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}