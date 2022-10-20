const saludos = require("./saludos.js")
/* importo con const y require, nombrando a la variable, como el módulo que importo,
 e indicando a require la ubicación del mismo.
 "import" se usa para otro tipo de importaciones, como en React*/

 //console.log(saludos);
console.log(saludos.saludar("Beto"));
/* el modulo que estoy importando, es un objeto, y como tal, para llamar a la función, tengo que llamar 
a la propiedad de ese objeto, que la almacena */

console.log(saludos.saludarHolaMundo());

/***************** IMPORTACION DESESTRUCTURADA - SOLO ALGUNOS COMPONENTES DEL MODULO ****************/
const { saludar, saludarHolaMundo } = require("./saludos")
//llaves y lo que necesito, separado por comas

//ya no se invoca al módulo para llamarlas
console.log(saludar("Mari"));
console.log(saludarHolaMundo());