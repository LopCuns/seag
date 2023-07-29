import createDTO from './createDTO.js'
import {
  typeError,
  requiredError,
  noAdditionalError
} from '#Validations/errors/dto.errors.js'
import { roomTypeSchema, roomNameSchema } from './lib.dto.js'

const deleteRoomSchema = {
  type: 'object',
  properties: {
    roomType: roomTypeSchema,
    roomName: roomNameSchema,
    masterKey: {
      type: 'string',
      errorMessage: typeError('masterKey', 'string(cadena de texto)')
    }
  },
  required: ['roomType', 'roomName', 'masterKey'],
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

const deleteRoomDTO = createDTO(deleteRoomSchema)

export default deleteRoomDTO
