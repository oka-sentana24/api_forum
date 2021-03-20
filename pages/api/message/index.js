import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.message.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_message, text, id_chatting_room, id_pengguna } = req.body
    const getResultAll = await prisma.chatting_room.findMany({
      where: {
        id_message:id_message,
        text:text,
        id_chatting_room:id_chatting_room,
        id_pengguna
      },
    })
    res.json(getResultAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}