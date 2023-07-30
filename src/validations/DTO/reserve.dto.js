import { roomTypeSchema, roomNameSchema, dateSchema, emailSchema } from './lib.dto.js'
import {
  noAdditionalError,
  requiredError
} from '#Validations/errors/dto.errors.js'
import createDTO from './createDTO.js'

const reserveSchema = {
  type: 'object',
  properties: {
    roomType: roomTypeSchema,
    roomName: roomNameSchema,
    guestEmail: emailSchema,
    arriveDate: dateSchema,
    departureDate: dateSchema
  },
  required: ['roomType', 'roomName', 'arriveDate', 'guestEmail', 'departureDate'],
  additionalProperties: false,
  errorMessage: {
    required: {
      roomType: requiredError('roomType'),
      roomName: requiredError('roomName'),
      arriveDate: requiredError('arriveDate'),
      guestEmail: requiredError('guestEmail'),
      departureDate: requiredError('departureDate')
    },
    additionalProperties: noAdditionalError()
  }
}

const reserveDTO = createDTO(reserveSchema, ['date', 'email'])

export default reserveDTO
