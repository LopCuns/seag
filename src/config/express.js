import express from 'express'
import addRoomDTO from '#Validations/DTO/addRoom.dto.js'
import emptyBodyDTO from '#Validations/DTO/emptyBody.dto.js'
import reserveDTO from '#Validations/DTO/reserve.dto.js'
import checkRoomExistance from '#Validations/checkRoomExistance.js'
import addRoomController from '#Controllers/addRoom.controller.js'
import deleteRoomDTO from '#Validations/DTO/deleteRoom.dto.js'
const expressApp = express()

expressApp.use(express.json())

expressApp.post('/addRoom', addRoomDTO, addRoomController)
expressApp.get('/checkDisponibility', emptyBodyDTO, (req, res) =>
  res.status(200).send(':)')
)
expressApp.patch('/reserve', reserveDTO, checkRoomExistance, (req, res) =>
  res.status(200).send(req.body)
)
expressApp.delete('/deleteRoom', deleteRoomDTO, (req, res) =>
  res.status(200).send('eliminada')
)

export default expressApp
