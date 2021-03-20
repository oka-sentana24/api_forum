import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.chatting_room.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_room, nama } = req.body
    const getResultAll = await prisma.chatting_room.findMany({
      where: {
        id_room:id_room,
        nama:nama,
      },
    })
    res.json(getResultAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}