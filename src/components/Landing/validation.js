const validate = (userData) => {
  let errors = {};
  
  // Validar el campo "nombre" para que no contenga caracteres especiales
  const nombrePattern = /^[a-zA-Z\s]+$/;
  if (data.nombre && !nombrePattern.test(data.nombre)) {
    errors.nombre = "El nombre no debe contener caracteres especiales no permitidos.";
  }

  return errors;
}

export default validate;