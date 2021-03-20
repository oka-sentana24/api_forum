import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const conferenceMessageId = req.query.id

  if (req.method === 'GET') {
    handleGET(conferenceMessageId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(conferenceMessageId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(conferenceMessageId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_conference_message, res) {
  const getResult = await prisma.conference_message.findUnique({
    where: { id_conference_message: Number(id_conference_message) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_conference_message, req, res) {
    const { text, id_pengguna, id_video_conference } = req.body
    const chattingRoomResult = await prisma.conference_message.update({
        where: { id_conference_message: Number(id_conference_message) },
        // include:{
        data: {
          text:text,
          id_pengguna:id_pengguna,
          id_video_conference:id_video_conference
        },
        // }
    })
    res.json(chattingRoomResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_conference_message, res) {
  const deleteResult = await prisma.conference_message.delete({
    where: { id_conference_message: Number(id_conference_message) },
  })
  res.json(deleteResult)
}