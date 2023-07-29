export const BADREQUEST = (
  res,
  errormsg = 'La petición no cumple con los requirimientos.'
) => res.status(400).send({ errormsg })
export const UNAUTHORIZED = (
  res,
  errormsg = 'No estás autorizado para realizar esta operación.'
) => res.status(401).send({ errormsg })
export const NOTFOUND = (res, errormsg = 'Información no encontrada.') =>
  res.status(404).send({ errormsg })
export const CONFLIT = (res, errormsg = 'Error de conflicto.') =>
  res.status(409).send({ errormsg })
