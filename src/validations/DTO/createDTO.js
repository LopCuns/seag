import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import ajvErrors from 'ajv-errors'
import { BADREQUEST } from '#Validations/errors/server.errors.js'

const createDTO = (schema, formats) => {
  const ajv = new Ajv({ allErrors: true })
  addFormats(ajv, ...[formats].flat())
  ajvErrors(ajv)

  const validator = ajv.compile(schema)

  return (req, res, next) => {
    const isValidDTO = validator(req.body)
    if (!isValidDTO) return BADREQUEST(res, validator.errors.map(err => err.message))
    next()
  }
}

export default createDTO
