import RoomModel from '#Schemas/room.schema.js'

const deleteRoom = async (res, room) => {
  await RoomModel.findByIdAndDelete(room._id)
  return res.status(200).send(`Habitación ${room.roomType} ${room.roomName} ha sido eliminada correctamente.`)
}
export default deleteRoom
