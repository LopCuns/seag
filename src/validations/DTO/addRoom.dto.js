import {
  typeError,
  requiredError,
  noAdditionalError
} from '#Validations/errors/dto.errors.js'
import {
  roomTypeSchema,
  roomNameSchema,
  reservationsSchema
} from './lib.dto.js'
import createDTO from './createDTO.js'

const addRoomSchema = {
  type: 'object',
  properties: {
    roomType: roomTypeSchema,
    roomName: roomNameSchema,
    reservations: reservationsSchema,
    masterKey: {
      type: 'string',
      errorMessage: typeError('masterKey', 'string(cadena de texto)')
    }
  },
  required: ['roomType', 'roomName', 'reservations', 'masterKey'],
  additionalProperties: false,
  errorMessage: {
    type: typeError('addRoom/body', 'object (objeto)'),
    required: {
      roomType: requiredError('roomType'),
      roomName: requiredError('roomName'),
      reservations: requiredError('reservations'),
      masterKey: requiredError('masterKey')
    },
    additionalProperties: noAdditionalError()
  }
}

const addRoomDTO = createDTO(addRoomSchema, 'date')

export default addRoomDTO
