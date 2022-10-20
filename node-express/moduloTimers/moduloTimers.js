/********
 * Modulo Timers - para simular funciones asíncronas - incluido sin necesidad de importarlo
 * ejecutan funciones, luego de un cierto periodo de tiempo, y no, en el momento que se procesa esa linea de código   
 * setTimeout(funcion, retraso, argumento) ejecuta código, luego de un nro específico de milisegundos ( 1s = 1000 mili) 
 * el argumento es el valor que se le va a pasar a la función, luego del tiempo indicado, si fueran varios:
 * setTimeout(funcion, retraso, argumento1, argumento2)
 */

function mostrarTema(tema){
    console.log(`Estoy repasando ${tema}`)
}

setTimeout(mostrarTema,8000,"setTimeOut")

function sumar(a,b){
    console.log(a+b)
}

setTimeout(sumar,3000,3,4)


/****** setImmediate(funcion, argumento1, argumento2)
 * Para ejecutar código asíncrono en la próxima iteración del ciclo de eventos.
 * Lo más pronto posible, pero después del código síncrono.
 * El código síncrono tiene la prioridad, pero inmediatamente después, se ejecuta setImmediate (de forma asíncrona)
 */

console.log("Antes de setImmediate");
setImmediate(mostrarTema, "setImmediate")
console.log("Después de setImmediate");

/****** setInterval(funcion,intervalo,argumento1,argumento2)
 * Para ejecutar código un nro infinito de veces con un retraso específico de milisegundos 
 */

setInterval(mostrarTema, 1700, "setInterval")