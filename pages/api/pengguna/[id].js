import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const penggunaId = req.query.id

  if (req.method === 'GET') {
    handleGET(penggunaId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(penggunaId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(penggunaId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_pengguna, res) {
  const getPengguna = await prisma.pengguna.findUnique({
    where: { id_pengguna: Number(id_pengguna) },
    // include: { author: true },
  })
  res.json(getPengguna)
}
// Update /api/post/:id
async function handlePUT(id_pengguna, req, res) {
    const { username, password, role, id_siswa, id_guru} = req.body
    const updatePengguna = await prisma.pengguna.update({
        where: { id_pengguna: Number(id_pengguna) },
        // include:{
        data: {
            username: username,
            password: password,
            role:role,
            id_siswa:id_siswa,
            id_guru:id_guru
        },
        // }
    })
    res.json(updatePengguna)
}

// DELETE /api/post/:id
async function handleDELETE(id_pengguna, res) {
  const deletePengguna = await prisma.pengguna.delete({
    where: { id_pengguna: Number(id_pengguna) },
  })
  res.json(deletePengguna)
}