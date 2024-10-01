function saludar(name) {
  return `Hola ${name}!`;
}

function despedir(name) {
  return `Adiós ${name}!`;
}


module.exports = {  
  Saludo: saludar,
  Despedida: despedir
};

