const disableRoomUntil = (room, initDisable, endDisable) => {
  room.reservations.push({ arriveDate: initDisable, departureDate: endDisable })
  room.save()
}
export default disableRoomUntil
