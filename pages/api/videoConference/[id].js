import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const videoConferenceId = req.query.id

  if (req.method === 'GET') {
    handleGET(videoConferenceId, res)
  } 
  else if (req.method === 'DELETE') {
    handleDELETE(videoConferenceId, res)
  }
  else if (req.method === 'PUT') {
    handlePUT(videoConferenceId, req, res)
  }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(id_video_conference, res) {
  const getResult = await prisma.video_conference.findUnique({
    where: { id_video_conference: Number(id_video_conference) },
    // include: { author: true },
  })
  res.json(getResult)
}
// Update /api/post/:id
async function handlePUT(id_video_conference, req, res) {
    const { kode_video, id_pengguna } = req.body
    const chattingRoomResult = await prisma.video_conference.update({
        where: { id_video_conference: Number(id_video_conference) },
        // include:{
        data: {
          kode_video:kode_video,
          id_pengguna:id_pengguna
        },
        // }
    })
    res.json(chattingRoomResult)
}

// DELETE /api/post/:id
async function handleDELETE(id_video_conference, res) {
  const deleteResult = await prisma.video_conference.delete({
    where: { id_video_conference: Number(id_video_conference) },
  })
  res.json(deleteResult)
}