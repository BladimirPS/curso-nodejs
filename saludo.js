function saludar(name) {
  return `Hola ${name}!`;
}

function despedir(name) {
  return `Adiós ${name}!`;
}


function curso() {
  return `Curso de Node.js`;
}


module.exports = {  
  Saludo: saludar,
  Despedida: despedir,
  Curso: curso
};

