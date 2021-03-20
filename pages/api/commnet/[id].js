import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const commentId = req.query.id

  if (req.method === 'GET') {
    handleGET(commentId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(commentId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(commentId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_comment, res) {
  const getResult = await prisma.comment.findUnique({
    where: { id_comment: Number(id_comment) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_comment, req, res) {
    const { description, id_pengguna, id_posting, id_upload } = req.body
    const commentResult = await prisma.comment.update({
        where: { id_comment: Number(id_comment) },
        // include:{
        data: {
          description:description,
          id_pengguna:id_pengguna,
          id_posting:id_posting,
          id_upload:id_upload
        },
        // }
    })
    res.json(commentResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_comment, res) {
  const deleteResult = await prisma.posting.delete({
    where: { id_comment: Number(id_comment) },
  })
  res.json(deleteResult)
}