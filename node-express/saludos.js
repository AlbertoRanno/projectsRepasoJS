function saludar (nombre) {
  return `Hola ${nombre}`
}

//console.log(module.exports)
//module.exports.saludar = saludar 
/* module.exports es un objeto, inicialemente vacío 
la primer parte es notación de objetos, estoy agregándole una propiedad a ese objeto:
module.exports.NombreNuevaPropiedad = lo que va a almacenar esa nueva propiedad
El nombre de la nueva prop. podría ser cualquiera, pero como es el nombre con el que se va a exportar, para
ser prácticos, se le pone el mismo nombre de lo que exporta.*/
//console.log(module.exports)

function saludarHolaMundo () {
  return "Hola Mundo!"
}

//module.exports.saludarHolaMundo = saludarHolaMundo

//console.log(module.exports);

//*************EXPORTAR VARIAS FUNCIONES - OTRA SINTAXIS*******************/
module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo
}

console.log(module.exports);