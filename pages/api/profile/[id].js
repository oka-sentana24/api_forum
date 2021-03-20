import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const profileId = req.query.id

  if (req.method === 'GET') {
    handleGET(profileId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(profileId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(profileId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_profile, res) {
  const getResult = await prisma.profile.findUnique({
    where: { id_profile: Number(id_profile) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_profile, req, res) {
    const { bio, id_siswa, id_pengguna, id_upload } = req.body
    const updateResult = await prisma.profile.update({
        where: { id_profile: Number(id_profile) },
        // include:{
        data: {
          bio: bio,
          id_siswa:id_siswa,
          id_pengguna:id_pengguna,
          id_upload:id_upload,
        },
        // }
    })
    res.json(updateResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_profile, res) {
  const deleteResult = await prisma.profile.delete({
    where: { id_profile: Number(id_profile) },
  })
  res.json(deleteResult)
}