import deleteRoom from '#Lib/deleteRoom.js'
import disableRoomUntil from '#Lib/disableRoomUntil.js'
import getDateRFC3339 from '#Lib/getDateRFC3339.js'
import validateAdmin from '#Validations/validateAdmin.js'
import { CONFLICT, NOTFOUND, UNAUTHORIZED } from '#Validations/errors/server.errors.js'
const deleteRoomController = async (req, res) => {
  const { roomType, roomName, masterKey } = req.body

  if (!validateAdmin(masterKey)) {
    return UNAUTHORIZED(
      res,
      'Sólo el administrador puede añadir habitaciones nuevas.'
    )
  }

  const room = req.room

  if (!room) return NOTFOUND(res, `La habitación ${roomName} del tipo ${roomType} no existe.`)

  const currentDate = getDateRFC3339(new Date())

  const activeReservations = room.reservations
    .filter(r => (r.arriveDate >= currentDate || r.departureDate >= currentDate) && r.departureDate !== '9999-99-99')

  if (activeReservations.length === 0) return deleteRoom(res, room)

  const isDisabledYet = room.reservations.find(r => r.departureDate === '9999-99-99')
  const latestActiveDate = activeReservations.reduce((pr, cr) => pr.departureDate > cr.departureDate ? pr : cr).departureDate
  // Disable room from the latest active date
  if (!isDisabledYet) disableRoomUntil(room, latestActiveDate, '9999-99-99')
  return CONFLICT(res, `No puedes eliminar la habitación, tiene reservas activas hasta ${latestActiveDate}.La habitación ha sido deshabilitada.`)
}
export default deleteRoomController
