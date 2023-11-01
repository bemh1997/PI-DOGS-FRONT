const validate = (data) => {
  const errors = {};

  // Validar el campo "nombre" para que no contenga caracteres especiales
  const nombrePattern = /^[a-zA-Z\s]+$/;
  if (data.nombre && !nombrePattern.test(data.nombre)) {
    errors.nombre = "El nombre no debe contener caracteres especiales.";
  }

  // Validar el campo "imagen" para que contenga .jpg, .jpeg, o .png al final
  const imagenPattern = /\.(jpg|jpeg|png)$/;
  if (data.imagen && !imagenPattern.test(data.imagen.toLowerCase())) {
    errors.imagen = "La imagen debe ser un enlace con una extensión .jpg, .jpeg o .png.";
  }

  // Validar los campos numéricos
  const numericFields = [
    "alturaMin",
    "alturaMax",
    "pesoMin",
    "pesoMax",
    "esperanzaMin",
    "esperanzaMax",
  ];

  numericFields.forEach((field) => {
    if (data[field] !== "" && isNaN(data[field])) {
      errors[field] = "Debe ser un valor numérico.";
    }
  });

  // Validar las relaciones de rangos
  if (
    data.alturaMin !== "" &&
    data.alturaMax !== "" &&
    Number(data.alturaMin) >= Number(data.alturaMax)
  ) {
    errors.alturaMin = "La altura mínima debe ser menor que la altura máxima.";
  }

  if (
    data.pesoMin !== "" &&
    data.pesoMax !== "" &&
    Number(data.pesoMin) >= Number(data.pesoMax)
  ) {
    errors.pesoMin = "El peso mínimo debe ser menor que el peso máximo.";
  }

  if (
    data.esperanzaMin !== "" &&
    data.esperanzaMax !== "" &&
    Number(data.esperanzaMin) >= Number(data.esperanzaMax)
  ) {
    errors.esperanzaMin = "La esperanza de vida mínima debe ser menor que la esperanza de vida máxima.";
  }

  return errors;
};

export default validate;
