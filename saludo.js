function saludar(name) {
  return `Hola ${name}!`;
}

function despedir(name) {
  return `Adiós ${name}!`;
}

function holamundo() {
  return `Hola Mundo a Todoss!`;
}


module.exports = {  
  Saludo: saludar,
  Despedida: despedir,
  HolaMundo: holamundo

};

