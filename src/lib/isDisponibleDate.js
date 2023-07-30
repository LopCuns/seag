/**
 * Check if a date is compatible between a list of dates.
 * @param {String} qdate
 * @param {Array.<String>} dates
 * @returns Object
 */
const isDisponibleDate = (qdate, dates) => {
  for (const date of dates) {
    if (qdate[0] >= date[0] && qdate[0] <= date[1]) return { disponible: false, reason: date }
    if (qdate[1] >= date[0] && qdate[1] <= date[1]) return { disponible: false, reason: date }
  }
  return { disponible: true, reason: qdate }
}
export default isDisponibleDate
