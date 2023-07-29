import { roomTypeSchema, roomNameSchema, dateSchema } from './lib.dto.js'
import { noAdditionalError, requiredError } from '#Validations/errors/dto.errors.js'
import createDTO from './createDTO.js'

const reserveSchema = {
  type: 'object',
  properties: {
    roomType: roomTypeSchema,
    roomName: roomNameSchema,
    arriveDate: dateSchema,
    departureDate: dateSchema
  },
  required: ['roomType', 'roomName', 'arriveDate', 'departureDate'],
  additionalProperties: false,
  errorMessage: {
    required: {
      roomType: requiredError('roomType'),
      roomName: requiredError('roomName'),
      arriveDate: requiredError('arriveDate'),
      departureDate: requiredError('departureDate')
    },
    additionalProperties: noAdditionalError()
  }
}

const reserveDTO = createDTO(reserveSchema, 'date')

export default reserveDTO
