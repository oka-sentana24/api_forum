import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const kelasId = req.query.id

  if (req.method === 'GET') {
    handleGET(kelasId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(kelasId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(kelasId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_kelas, res) {
  const getGuru = await prisma.kelas.findUnique({
    where: { id_kelas: Number(id_kelas) },
    // include: { author: true },
  })
  res.json(getGuru)
}
// Update /api/post/:id
async function handlePUT(id_kelas, req, res) {
  const { nama, grade, jurusan, tahun_ajaran, id_guru } = req.body
  const updateGuru = await prisma.kelas.update({
    where: { id_kelas: Number(id_kelas) },
    // include:{
      data: {
        nama: nama,
        grade:grade,
        jurusan:jurusan,
        tahun_ajaran:tahun_ajaran,
        id_guru:id_guru,
      },
    // }
  })
  res.json(updateGuru)
}

// DELETE /api/post/:id
async function handleDELETE(id_kelas, res) {
  const deleteSiswa = await prisma.kelas.delete({
    where: { id_kelas: Number(id_kelas) },
  })
  res.json(deleteSiswa)
}