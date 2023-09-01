export const validateUser = (data) => {
  let errors = {}
  
  if(!data.username){
      errors.e2 = 'Ingresa un email.'
  }
  if(!data.username.includes('@')){
      errors.e1 = 'Ingresa un email válido.'
  }
  if(data.username.length > 35){
      errors.e3 = 'Debe tener menos de 36 caracteres.'
  }
  if(!/\d/.test(data.password)){
      errors.p1 = 'el password debe incluir al menos un número'
  }
  if(data.password.length < 6 || data.password.length > 10){
      errors.p2 = 'El password debe tener mas de 6 y menos de 10 caracteres.'
  }

  
  return errors;
}
