import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.siswa.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_siswa, nis, nama, alamat, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, no_tlp, email, kewarganegaraan, kecamatan, kabupaten, nama_ayah, pekerjaan_ayah, nama_ibu, pekerjaan_ibu} = req.body
    const getAll = await prisma.siswa.findMany({
      where: {
        id_siswa:id_siswa,
        nis:nis,
        nama: nama,
        alamat:alamat,
        jenis_kelamin:jenis_kelamin,
        tempat_lahir:tempat_lahir,
        tanggal_lahir:tanggal_lahir,
        agama:agama,
        no_tlp:no_tlp,
        email:email,
        kewarganegaraan:kewarganegaraan,
        kecamatan:kecamatan,
        kecamatan:kecamatan,
        kabupaten:kabupaten,
        nama_ayah:nama_ayah,
        pekerjaan_ayah:pekerjaan_ayah,
        nama_ibu:nama_ibu,
        pekerjaan_ibu:pekerjaan_ibu
      },
    })
    res.json(getAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}