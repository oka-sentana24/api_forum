import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const guruId = req.query.id

  if (req.method === 'GET') {
    handleGET(guruId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(guruId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(guruId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_guru, res) {
  const getGuru = await prisma.guru.findUnique({
    where: { id_guru: Number(id_guru) },
    // include: { author: true },
  })
  res.json(getGuru)
}
// Update /api/post/:id
async function handlePUT(id_guru, req, res) {
  const { nip, nama, alamat, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, no_tlp, email, jabatan, ktp,  kewarganegaraan, kecamatan, kabupaten, nama_ayah, pekerjaan_ayah, nama_ibu, pekerjaan_ibu } = req.body
  const updateGuru = await prisma.guru.update({
    where: { id_guru: Number(id_guru) },
    // include:{
      data: {
        nip: nip,
        nama: nama,
        alamat:alamat,
        jenis_kelamin:jenis_kelamin,
        tempat_lahir: tempat_lahir,
        tanggal_lahir:tanggal_lahir,
        agama:agama,
        no_tlp:no_tlp,
        email:email,
        jabatan:jabatan,
        ktp:ktp,
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
async function handleDELETE(id_guru, res) {
  const deleteGuru = await prisma.guru.delete({
    where: { id_guru: Number(id_guru) },
  })
  res.json(deleteGuru)
}