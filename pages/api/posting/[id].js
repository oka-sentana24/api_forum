import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const postingId = req.query.id

  if (req.method === 'GET') {
    handleGET(postingId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(postingId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(postingId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_posting, res) {
  const getResult = await prisma.posting.findUnique({
    where: { id_posting: Number(id_posting) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_posting, req, res) {
    const { title, description, id_pengguna, id_upload } = req.body
    const postingResult = await prisma.posting.update({
        where: { id_posting: Number(id_posting) },
        // include:{
        data: {
          title:title,
          description:description,
          id_pengguna:id_pengguna,
          id_upload:id_upload,
        },
        // }
    })
    res.json(postingResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_posting, res) {
  const deleteResult = await prisma.posting.delete({
    where: { id_posting: Number(id_posting) },
  })
  res.json(deleteResult)
}