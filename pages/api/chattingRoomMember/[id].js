import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const chattingRoomMemberId = req.query.id

  if (req.method === 'GET') {
    handleGET(chattingRoomMemberId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(chattingRoomMemberId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(chattingRoomMemberId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_room_member, res) {
  const getResult = await prisma.chatting_room_member.findUnique({
    where: {id_room_member: Number(id_room_member) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_room_member, req, res) {
    const { id_room, id_pengguna } = req.body
    const chattingRoomResult = await prisma.chatting_room_member.update({
        where: { id_room_member: Number(id_room_member) },
        // include:{
        data: {
         id_room:id_room,
         id_pengguna:id_pengguna
        },
        // }
    })
    res.json(chattingRoomResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_room_member, res) {
  const deleteResult = await prisma.chatting_room_member.delete({
    where: { id_room_member: Number(id_room_member) },
  })
  res.json(deleteResult)
}