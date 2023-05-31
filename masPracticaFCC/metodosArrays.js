/********************* FILTER ****************************************************/
/* El metodo de Filter, puede crear otro array DISTINTO (no es que modifica el original), de igual o menor
longitud que el original, con aquellos elementos del array que cumplen la condicion */

const nros = [1,2,3,4,5,6,7,8,9,2,4,5,1]

const nrosFiltrados = nros.filter(filtrados => filtrados < 5)
//console.log(nrosFiltrados)

const mascotas = [{nombre: "bestia", edad: 4, raza: "perro" }, 
{nombre: "chicho", edad: 3, raza: "perro" },
{nombre: "pepe", edad: 2, raza: "canario" },
{nombre: "friki", edad: 2, raza: "perro" }]

const perros = mascotas.filter(x => x.raza == "perro")
//console.log(perros);

/********************* MAP ****************************************************/
/* El metodo de Map, crea otro array DISTINTO (no es que modifica el original), de exactamente la misma
longitud que el original. Map sirve para transformar cada uno de los elementos del array original en base
a lo que necesite. */

const nrosduplicados = nros.map(x => x * 2)
//console.log(nrosduplicados)

const parejas = nros.map(x => [x,x])
//console.log(parejas);

const edadesPerros = mascotas.map(x => x.edad)
//console.log(edadesPerros);

function suma (array) {
    let acumulado = 0
    for (i=0; i<array.length ; i++){
        acumulado += array[i]
    }
    return acumulado
}

const edadPromedio = suma(edadesPerros)/(edadesPerros.length)
//console.log(edadPromedio)

/********************* REDUCE ****************************************************/
/* Reduce es un método que permite ejecutar funciones "Reducer". Éstas reciben 2 elementos, el 1ero, es un
elemento que está siendo acumulado, y el 2do es el elemento que se está iterando del array. Además de un 
indicador de valor inicial del acumulador. Y esta función, va a devolver el elemento que se está acumulando.
Y que es el que se va a pasar como argumente la siguiente vez que se llame la funcion reducer*/

/* Esta es la forma correcta en la que esperan que hagamos las sumas, y no como en la función suma mencionada
anteriormente, que usa un FOR */
const sumaConReduce = nros.reduce((acumulador, elemento) => acumulador + elemento, 0)
/* acum = 0, entonces 0 + 1 = 1 = nuevoAcum
 1 + 2 = 3 = nuevoAcum
 ...
 51 + 5 = 56 = nuevoAcum
 56 + 1 = 57 // y ahí se termina porque ese "1", es el último elemento del array
 */
//console.log(sumaConReduce);

/* EJEMPLO IMPORTANTE DE USO DE REDUCE: INDEXAR LOS ELEMENTOS DE UN ARRAY
Es un caso común e importante, tener un array gigante, y usar find para buscar algo. El tema es que, cuando,
este array, tiene vinculado otro/s.. por cada elemento que busque en el primer array, va a revisar todos los 
elementos del 2do array conectado.. y eso va destruir la performance de la app. Por lo que se usa reduce, para
simplificar , "indexar", el array, y mejorar la performance. */
const indexedMascotas = mascotas.reduce(
    (acumulador,elemento) => ({...acumulador, [elemento.nombre]: elemento}), {})
//el valor inicial del acumulador, ahora es un OBJETO, No un nro.
//entonces la función debe devolver un objeto
//este objeto va a ser una copia del acumulador {...acumulador}
//pero también le voy a agregar una nueva llave a este objeto "  ,[] "
//ya que quiero este nuevo objeto esté indexado por el nombre de la mascota " [elemento.nombre]"
//y ese index va a alojar a la mascota completa "  : elmento "
//console.log(indexedMascotas)
//console.log(indexedMascotas.chicho)

/* OTRO EJEMPLO CON ARRAYS ANIDADOS: Los puedo volver planos (sin anidaciones), mediante reduce */
const anidados = [ 1, [2 , 3 ], 4, [5] ]
const plano = anidados.reduce((acumulador, elemento) => acumulador.concat(elemento),[])
// acumulador inicia en un array vacío, y el primer elemento es 1
// concatena, y obtengo: [1]
// el 2do elemento, es una array que contiene los elementos 2 y 3
// concatena, con el [1] ya acumulado, y obtengo: [1,2,3]
//... siguen idem
//console.log(plano);