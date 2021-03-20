import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const messageId = req.query.id

  if (req.method === 'GET') {
    handleGET(messageId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(messageId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(messageId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_message, res) {
  const getResult = await prisma.message.findUnique({
    where: { id_message: Number(id_message) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_message, req, res) {
    const { text, id_chatting_room, id_pengguna } = req.body
    const chattingRoomResult = await prisma.chatting_room.update({
        where: { id_roomg: Number(id_room) },
        // include:{
        data: {
         text:text,
         id_chatting_room:id_chatting_room,
         id_pengguna:id_pengguna
        },
        // }
    })
    res.json(chattingRoomResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_message, res) {
  const deleteResult = await prisma.message.delete({
    where: { id_message: Number(id_message) },
  })
  res.json(deleteResult)
}