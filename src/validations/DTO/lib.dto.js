import { typeError, noEmptyError } from '#Validations/errors/dto.errors.js'
const roomTypeSchema = {
  type: 'string',
  minLength: 1,
  errorMessage: {
    type: typeError('roomType', 'string(cadena de texto)'),
    minLength: noEmptyError('roomType')
  }
}
const roomNameSchema = {
  type: 'string',
  minLength: 1,
  errorMessage: {
    type: typeError('roomName', 'string(cadena de texto)'),
    minLength: noEmptyError('roomName')
  }
}

const dateSchema = {
  type: 'string',
  format: 'date',
  errorMessage: {
    type: typeError('Date', 'date(fecha)'),
    format: 'Date debe cumplir con el formato fecha RFC3339'
  }
}

const emailSchema = {
  type: 'string',
  format: 'email',
  errorMessage: {
    type: typeError('email', 'email(correo electrónico)'),
    format: 'email debe cumplir con el formato email.'
  }
}

const reservationsSchema = {
  type: 'array',
  items: {
    type: 'array',
    minItems: 2,
    maxItems: 2,
    items: {
      type: 'object',
      properties: {
        arriveDate: dateSchema,
        departureDate: dateSchema,
        guestEmail: emailSchema
      }
    },
    errorMessage: {
      type: typeError('reservations/dates', 'array'),
      minItems:
        'reservations/dates solo debe contener dos fechas (llegada y salida)',
      maxItems:
        'reservations/dates solo debe contener dos fechas (llegada y salida)'
    }
  },
  errorMessage: 'reservations debe ser un array de pares de fechas.'
}

export { roomTypeSchema, roomNameSchema, dateSchema, emailSchema, reservationsSchema }
