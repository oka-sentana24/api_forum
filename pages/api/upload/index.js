import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.upload.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_upload, id_profile, link, title, id_pengguna } = req.body
    const getResultAll = await prisma.upload.findMany({
      where: {
        id_upload:id_upload,
        id_profile:id_profile,
        link:link,
        title:title,
        id_pengguna:id_pengguna,
      },
    })
    res.json(getResultAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}