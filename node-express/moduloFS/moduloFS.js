/******** Módulo File System (FS) 
*Permite: leer - modificar - copiar - eliminar - cambiar nombre, a los archivos/carpetas
*Todos sus métodos, son Asíncronos, por defecto (se empieza a copiar un archivo, y el programa sigue mientras haciendo otra cosa)
*Se pueden escoger versiones síncrones de estos métodos, agregando Sync a sus nombres. Ejemplo:
fs.rename()  (asíncrono) //  fs.renameSync() (síncrono)
*/


/*************************************** IMPORTANTE *******************************************************/
/* A continuación probé las versiones asíncronas, como tales, de ejecturar el archivo con todas ellas, 
primero se ejecutaría todo lo síncrono, y luego éstas, asíncronas, pero en un orden imposible de descifrar a 
priori, dado que dependerá de cual lleve menos tiempo para ejecutarse.
   Si quisiera forzar un orden de ejecución en ellas, tendría que convertirarlas en síncronas, mediante el 
agregado de SYNC a los nombres de los métodos. Ver en moduloFSSync*/
/*************************************** IMPORTANTE *******************************************************/


const fs = require("fs")

/* LEER UN ARCHIVO */

console.log("Antes de leer el archivo");

// fs.readFile("ejFS.html","utf-8", (err, contenido) => {
//     if(err){console.log(err)}
//     else {console.log(contenido);}
//     console.log("Esto no se lee si está throw y hubo err, porque throw detiene la ejecución")
// })

/****** throw err 
 * a diferencia del if(err) anterior, throw, corta la ejecución del código si hubo un error!
 */

fs.readFile("ejFS.html", "utf-8", (err, contenido)=>{ //CAMBIAR EL NOMBRE DEL ARCHIVO PARA PROBAR EL THROW
    if (err) {
        throw err
    }
    console.log(contenido)
    console.log("Esto no se lee si está throw y hubo err, porque throw detiene la ejecución");
})

console.log("Luego de leer el archivo");

/* CAMBIAR NOMBRE DE UN ARCHIVO */
fs.rename("ejFS.html", "index.html", (err) => {
    if (err) {
        throw err
    }
    console.log("Nombre cambiado exitosamente")
})

console.log("Luego de cambiar el nombre del archivo");

/* AGREGAR CONTENIDO AL FINAL DEL ARCHIVO */
fs.appendFile("index.html", "<p> Etiqueta Agregada </p>", (err) => {
    if (err) {
        throw err
    }
    console.log("Archivo actualizado correctamente");
})

console.log("Luego de agregar contenido al archivo");

/* CREAR o REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO */
fs.writeFile("index.html", "Contenido Nuevo en cualquier formato", (err) => {
    if(err){
        throw err
    }
    console.log("Contenido reemplazo con éxito");
})

console.log("Luego de reemplazar el contenido del archivo");

/* ELIMINAR ARCHIVOS */
fs.unlink("aEliminar2.html",(err)=>{
    if (err) {
        throw err
    }
    console.log("Archivo eliminado correctamente");
})

console.log("Luego de eliminar el archivo");