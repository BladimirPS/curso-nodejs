function saludar(name) {
  return `Hola ${name}!`;
}

function despedir(name) {
  return `Adiós ${name}!`;
}

function holamundo() {
  return `Hola Mundo a Todoss!`;
}

function alerta() {
  return `Alerta!`;
}

//module.exports.alerta = alerta;

module.exports = {  
  Saludo: saludar,
  Despedida: despedir,
  HolaMundo: holamundo,
  alerta: alerta
};

