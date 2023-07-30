import { BADREQUEST, CONFLICT } from '#Validations/errors/server.errors.js'
import isDisponibleDate from '#Lib/isDisponibleDate.js'
const reserveController = async (req, res) => {
  const { roomType, roomName, arriveDate, guestEmail, departureDate } = req.body

  const room = req.room

  // Arrive date cannot be greatear than departure date (not logical)
  if (arriveDate > departureDate) return BADREQUEST(res, 'La fecha de llegada no puede ser mayor a la fecha de salida.')
  const disponibility = isDisponibleDate(
    [arriveDate, departureDate],
    room.reservations.map(r => [r.arriveDate, r.departureDate])
  )

  if (!disponibility.disponible) return CONFLICT(res, `Habitación disponible antes de ${disponibility.reason[0]} o después de ${disponibility.reason[1]}`)
  room.reservations.push({ arriveDate, departureDate, guestEmail })

  await room.save()
  return res.status(200).send({ successmsg: `!Felicidades ${guestEmail}¡ ya has reservado ${roomType} ${roomName}` })
}
export default reserveController
