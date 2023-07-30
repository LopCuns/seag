import express from 'express'
import cors from 'cors'
import addRoomDTO from '#Validations/DTO/addRoom.dto.js'
import emptyBodyDTO from '#Validations/DTO/emptyBody.dto.js'
import reserveDTO from '#Validations/DTO/reserve.dto.js'
import checkRoomExistance from '#Validations/checkRoomExistance.js'
import addRoomController from '#Controllers/addRoom.controller.js'
import deleteRoomDTO from '#Validations/DTO/deleteRoom.dto.js'
import checkDisponibilityController from '#Controllers/checkDisponibility.controller.js'
import reserveController from '#Controllers/reserve.controller.js'
import deleteRoomController from '#Controllers/deleteRoom.controller.js'
const expressApp = express()

expressApp.use(cors())
expressApp.use(express.json())

expressApp.post('/addRoom', addRoomDTO, addRoomController)
expressApp.get('/checkDisponibility/:roomType/:roomName', emptyBodyDTO, checkDisponibilityController)
expressApp.patch('/reserve', reserveDTO, checkRoomExistance, reserveController)
expressApp.delete('/deleteRoom', deleteRoomDTO, checkRoomExistance, deleteRoomController)

export default expressApp
