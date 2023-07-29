import { BADREQUEST } from '../errors/server.errors.js'
const emptyBodyDTO = (req, res, next) => {
  const { body } = req
  const isBodyEmptyObject = typeof body === 'object' && !Object.keys(body).length
  if (!isBodyEmptyObject) return BADREQUEST(res, 'El contenido de la petición debe ser un objeto vacío.')
  next()
}

export default emptyBodyDTO
