/**
 * Validate coincidence between provided masterkey and real masterkey.
 * @param {string} masterKey
 * @returns Boolean
 */
const validateAdmin = (masterKey) => {
  if (masterKey !== process.env.MASTER_KEY) return false
  return true
}
export default validateAdmin
