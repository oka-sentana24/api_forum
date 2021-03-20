import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const kelasSiswaId = req.query.id

  if (req.method === 'GET') {
    handleGET( kelasSiswaId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE( kelasSiswaId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT( kelasSiswaId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_kelas_siswa, res) {
  const getGuru = await prisma.kelas_siswa.findUnique({
    where: { id_kelas_siswa: Number(id_kelas_siswa) },
    // include: { author: true },
  })
  res.json(getGuru)
}
// Update /api/post/:id
async function handlePUT(id_kelas_siswa, req, res) {
  const { id_kelas, id_siswa } = req.body
  const updateKelasSiswa = await prisma.kelas_siswa.update({
    where: { id_kelas_siswa: Number(id_kelas_siswa) },
    // include:{
      data: {
        id_kelas:id_kelas,
        id_siswa:id_siswa
      },
    // }
  })
  res.json(updateKelasSiswa)
}

// DELETE /api/post/:id
async function handleDELETE(id_kelas_siswa, res) {
  const deleteKelasSiswa = await prisma.kelas_siswa.delete({
    where: { id_kelas_siswa: Number(id_kelas_siswa) },
  })
  res.json(deleteKelasSiswa)
}