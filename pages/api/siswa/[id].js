import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const siswaId = req.query.id

  if (req.method === 'GET') {
    handleGET(siswaId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(siswaId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(siswaId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_siswa, res) {
  const getGuru = await prisma.siswa.findUnique({
    where: { id_siswa: Number(id_siswa) },
    // include: { author: true },
  })
  res.json(getGuru)
}
// Update /api/post/:id
async function handlePUT(id_siswa, req, res) {
  const { nis, nama, alamat, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, no_tlp, email, kewarganegaraan, kecamatan, kabupaten, nama_ayah, pekerjaan_ayah, nama_ibu, pekerjaan_ibu } = req.body
  const updateGuru = await prisma.siswa.update({
    where: { id_siswa: Number(id_siswa) },
    // include:{
      data: {
        nis: nis,
        nama: nama,
        alamat:alamat,
        jenis_kelamin:jenis_kelamin,
        tempat_lahir: tempat_lahir,
        tanggal_lahir:tanggal_lahir,
        agama:agama,
        no_tlp:no_tlp,
        email:email,
        kewarganegaraan:kewarganegaraan,
        kecamatan:kecamatan,
        kabupaten:kabupaten,
        nama_ayah:nama_ayah,
        pekerjaan_ayah:pekerjaan_ayah,
        nama_ibu:nama_ibu,
        pekerjaan_ibu:pekerjaan_ibu
      },
    // }
  })
  res.json(updateGuru)
}

// DELETE /api/post/:id
async function handleDELETE(id_siswa, res) {
  const deleteSiswa = await prisma.siswa.delete({
    where: { id_siswa: Number(id_siswa) },
  })
  res.json(deleteSiswa)
}