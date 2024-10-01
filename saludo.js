function saludar(name) {
  return `Hola ${name}!`;
}

function despedir(name) {
  return `Adiós ${name}!`;
}


function curso() {
  return `Curso de Node.js`;
}


function Error() {
  return `Error`;
}

function division(a, b) {
  return a / b;
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

module.exports = {  
  Saludo: saludar,
  Despedida: despedir,
  Curso: curso,
  Error: Error,
  suma: suma,
  resta: resta,
  multiplicacion: multiplicacion,
  division: division
};

