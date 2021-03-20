import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.kelas.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_kelas, nama, grade, jurusan, tahun_ajaran, id_guru } = req.body
    const getAll = await prisma.kelas.findMany({
      where: {
        id_kelas:id_kelas,
        nama: nama,
        grade:grade,
        jurusan:jurusan,
        tahun_ajaran:tahun_ajaran,
        id_guru:id_guru,
      },
    })
    res.json(getAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}