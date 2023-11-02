const passwordRegex = /^(?!.*(true|false|==|<>)).*$/;

const validate = (userData) => {
  let errors = {};
  // Validar el campo "nombre" para que no contenga caracteres especiales
  if(userData.password){
    if( !passwordRegex.test(userData.password)){
      errors.password = "No ingreses caracteres especiales no permitidos"
    }
  } else{
    errors.password = "Ingresa la password.";
  }

  return errors;
}

export default validate;