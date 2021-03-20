import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.profile.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_profile, bio, id_siswa, id_pengguna, id_upload } = req.body
    const getAll = await prisma.profile.findMany({
      where: {
        id_profile:id_profile,
        bio: bio,
        id_siswa:id_siswa,
        id_pengguna:id_pengguna,
        id_upload:id_upload,
      },
    })
    res.json(getAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}