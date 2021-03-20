import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const uploadId = req.query.id

  if (req.method === 'GET') {
    handleGET(uploadId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(uploadId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(uploadId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_upload, res) {
  const getResult = await prisma.upload.findUnique({
    where: { id_upload: Number(id_upload) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_upload, req, res) {
    const { id_profile, link, title, id_pengguna } = req.body
    const uploadResult = await prisma.profile.update({
        where: { id_upload: Number(id_upload) },
        // include:{
        data: {
          id_profile:id_profile,
          link:link,
          title:title,
          id_pengguna:id_pengguna,
        },
        // }
    })
    res.json(uploadResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_upload, res) {
  const deleteResult = await prisma.upload.delete({
    where: { id_upload: Number(id_upload) },
  })
  res.json(deleteResult)
}