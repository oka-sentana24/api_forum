import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.conference_message.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_conference_message, text, id_pengguna, id_video_conference } = req.body
    const getResultAll = await prisma.chatting_room.findMany({
      where: {
      id_conference_message:id_conference_message,
      text:text,
      id_pengguna:id_pengguna,
      id_video_conference:id_video_conference
      },
    })
    res.json(getResultAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}