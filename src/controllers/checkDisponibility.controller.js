import getRoom from './getRoom.js'
import getDateRFC3339 from '#Lib/getDateRFC3339.js'
import isDisponibleDate from '#Lib/isDisponibleDate.js'
import { CONFLICT } from '#Validations/errors/server.errors.js'
const checkDisponibilityController = async (req, res) => {
  const { roomType, roomName } = req.params

  const room = await getRoom(res, roomType, roomName)

  const currentDate = getDateRFC3339(new Date())

  const disponibility = isDisponibleDate(
    [currentDate, '9999-99-99'],
    room.reservations.map(r => [r.arriveDate, r.departureDate])
  )

  if (!disponibility.disponible) return CONFLICT(res, `Habitación disponible antes de ${disponibility.reason[0]} o después de ${disponibility.reason[1]}`)

  return res.status(200).send({ succesmsg: 'Habitación disponible' })
}
export default checkDisponibilityController
