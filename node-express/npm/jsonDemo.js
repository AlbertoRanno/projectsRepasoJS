/* La diferencia entre módulo y paquete, es que el paquete es un módulo que cuenta con el archivo package.json */

/************************ JSON *********************/
/* Formato de texto usado para transmitir información en tre el cliente y el servidor
OJO, es un FORMATO de texto, no es un lenguaje, ni sintaxis. 
Pero si está basado en la notación de objetos de JS
Permite almacenar objetos de JS como texto
Y ESTE FORMATO es INDEPENDIENTE del lenguaje de progración!!
Por lo que se puede usar JSON con JS, con Python, etc..*/

//Puedo trabajar con el json, incluyéndolo con Require
//Y veré que lo puedo tratar como un objeto, más allá de que esté escrito en formato JSON

const curso = require("./curso.json")
 console.log(curso);
 console.log(typeof curso);
// console.log(curso.titulo);
// console.log(curso.temas);
// console.log(curso.temas[1]);

//Pasar Objeto a String con JSON.stringify() - Pasa de formato JS a JSON

let infoCursoJSON = JSON.stringify(curso)
console.log(infoCursoJSON)
console.log(typeof infoCursoJSON)
//IMP! Notar que cambia el tipo de dato, pero sigue estando en FORMATO JSON
console.log(infoCursoJSON.titulo) // UNDEFINED , porque es un string, no un objeto

//Pasa de String a Objeto con JSON.parse() - Pasa de Formato JSON a JS

let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto)

/********Conclusión:
 * JSON es ideal para mandar info entre cliente - servidor (string JSON), 
 * pero luego se pasa a Objeto para poder utilizarla (objeto JS)
 */