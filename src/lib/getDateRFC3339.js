/**
 * Transform JS date object in RFC3339 format string date.
 * @param {Date} dateObj
 * @returns {String} RFC3339 format date
 */
const getDateRFC3339 = (dateObj) => {
  const year = dateObj.getFullYear()
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
  const day = ('0' + dateObj.getDate()).slice(-2)
  return `${year}-${month}-${day}`
}
export default getDateRFC3339
