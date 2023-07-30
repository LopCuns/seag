import getRoom from '#Controllers/getRoom.js'
import { NOTFOUND } from './errors/server.errors.js'

const checkRoomExistance = async (req, res, next) => {
  const { roomType, roomName } = req.body
  const room = await getRoom(res, roomType, roomName)
  if (!room) return NOTFOUND(res, `La habitación ${roomType} ${roomName} no existe.`)
  req.room = room
  next()
}
export default checkRoomExistance
