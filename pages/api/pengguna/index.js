import prisma from '../../../lib/prisma'

// POST /api/user
// Required fields in body: name, email
// export default async function handle(req, res) {
//   const result = await prisma.pengguna.create({
//     data: {
//       ...req.body,
//     },
//   })
//   res.json(result)

//   const { id_pengguna, username, password, role, id_siswa, id_guru }=req.body
//   const getAll = await prisma.pengguna.findMany({
//     data: {
//      id_pengguna:id_pengguna,
//      username:username,
//      password:password,
//      role:role,
//      id_siswa:id_siswa,
//      id_guru:id_guru
//     },
//   })
//   res.json(getAll)
// }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.pengguna.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_pengguna, username, password, role, id_siswa, id_guru } = req.body
    const getAll = await prisma.pengguna.findMany({
      where: {
      id_pengguna:id_pengguna,
      username:username,
      password:password,
      role:role,
      id_siswa:id_siswa,
      id_guru:id_guru
      },
    })
    res.json(getAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}