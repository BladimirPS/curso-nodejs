function saludar(name) {
  return `Hola ${name}!`;
}

function despedir(name) {
  return `Adiós ${name}!`;
}


function curso() {
  return `Curso de Node.js`;
}

function alerta() {
  return `Alerta!`;
}

//module.exports.alerta = alerta;

module.exports = {  
  Saludo: saludar,
  Despedida: despedir,
<<<<<<< HEAD
  Curso: curso
=======
  HolaMundo: holamundo,
  alerta: alerta
>>>>>>> 0c4d99e (Funcion Alerta Creada)
};

