import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.chatting_room_member.create({
          data: {
            ...req.body,
          },
        })
        res.json(result)
  } else if (req.method === 'GET'){
    const { id_room_member, id_room, id_pengguna } = req.body
    const getResultAll = await prisma.chatting_room_member.findMany({
      where: {
        id_room_member:id_room_member,
        id_room:id_room,
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