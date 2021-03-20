import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const chattingRoomId = req.query.id

  if (req.method === 'GET') {
    handleGET(chattingRoomId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(chattingRoomId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(chattingRoomId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_room, res) {
  const getResult = await prisma.chatting_room.findUnique({
    where: { id_room: Number(id_room) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_room, req, res) {
    const { nama } = req.body
    const chattingRoomResult = await prisma.chatting_room.update({
        where: { id_roomg: Number(id_room) },
        // include:{
        data: {
         nama:nama
        },
        // }
    })
    res.json(chattingRoomResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_room, res) {
  const deleteResult = await prisma.chatting_room.delete({
    where: { id_room: Number(id_room) },
  })
  res.json(deleteResult)
}