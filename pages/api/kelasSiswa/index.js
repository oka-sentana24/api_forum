import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.kelas_siswa.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_kelas_siswa, id_siswa, id_kelas } = req.body
    const getAll = await prisma.kelas_siswa.findMany({
      where: {
        id_kelas_siswa:id_kelas_siswa,
        id_siswa: id_siswa,
        id_kelas:id_kelas
      },
    })
    res.json(getAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}