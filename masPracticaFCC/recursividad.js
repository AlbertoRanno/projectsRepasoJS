/* Recursividad es una función que se llama a sí misma, hasta que se cumple cierta condición
const fn = () => cond ? salgo() : fn()
 Funciona muy bien en reemplazo de loops, (For, while, u otros) */


const conteoRegresivo = (a) => {
    if (a<0) return  
    console.log(a)
    return conteoRegresivo(a-1)
}

//conteoRegresivo(10)

/*Ejercicio clásico: Crear una función para implementar el algoritmo recursivo de factorial
n! = n * (n−1)! con !1 = 1 y !0 = 1 por definición
n! = n * (n-1) * (n-2)!
...
n! = n * (n-1) * (n-2) * (n-3) * (n-4)!   
5! = 5 * (5-1) * (5-2) * (5-3) * (5-4)!
5! =  5 * 4 * 3 * 2 * 1 = 120 */

const factorial = (a) => {
    if (a == 1 || a== 0) { return 1 } 
        return (a * factorial(a-1))  
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

const factorialP = (a) => {
   return (a == 1 || a == 0) ? 1 : a * factorialP(a-1)
}
console.log(factorialP(6));