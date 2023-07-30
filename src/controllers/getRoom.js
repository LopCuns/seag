import RoomModel from '#Schemas/room.schema.js'
import { BADREQUEST, NOTFOUND } from '#Validations/errors/server.errors.js'
const getRoom = async (res, roomType, roomName) => {
  if (!roomType || !roomName) return BADREQUEST(res, 'Debe especificarse el tipo de habitación y su nombre.')
  const room = await RoomModel.findOne({ roomType, roomName })
  if (!room) return NOTFOUND(res, `La habitación ${roomName} del tipo ${roomType} no existe.`)
  return room
}
export default getRoom
