export const typeError = (propname, type) =>
  `${propname} debe ser del tipo ${type}.`
export const noEmptyError = (propname) => `${propname} no debe estar vacío.`
export const requiredError = (propname) =>
  `${propname} es requerid@ para realizar esta operación.`
export const noAdditionalError = () =>
  'No se admiten propiedades adicionales para esta operación.'
