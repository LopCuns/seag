import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
  roomType: String,
  roomName: String,
  reservations: [Date]
})

const RoomModel = mongoose.model('rooms', roomSchema)

export default RoomModel
