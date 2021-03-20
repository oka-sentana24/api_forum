import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.video_conference.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_video_conference, kode_video, id_pengguna } = req.body
    const getResultAll = await prisma.chatting_room.findMany({
      where: {
        id_video_conference:id_video_conference,
        kode_video:kode_video,
        id_pengguna:id_pengguna
      },
    })
    res.json(getResultAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}