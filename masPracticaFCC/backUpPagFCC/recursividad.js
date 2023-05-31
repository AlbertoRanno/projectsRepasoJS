/********************************   RECURSIVIDAD   ***********************************/

//multiplica los primeros n ELEMENTOS de un arreglo:
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  console.log(multiply([2,2,2],0))
    // multiply([2,2,2], 0 - 1) * arr[0 - 1]; -> arr[-1] = no pertenece al array, por eso este caso se evalúa aparte,
    // y se establece como el neutro de la multiplicación. Directamente devuelve 1
  console.log(multiply([2,2,2],1))
    // multiply([2,2,2], 1 - 1) * arr[1 - 1]; ->  multiply([2,2,2], 0 ) * arr[0]; -> n=0 entonces = 1  y arr[0]=2 entonces queda 1 * 2 = 2
  console.log(multiply([2,2,2],2))
    // multiply([2,2,2], 2 - 1) * arr[2 - 1]; ->  multiply([2,2,2], 1 ) * arr[1]; -> n=1 entonces se vuelve a llamar a la función y * arr[1]=2 
    // ahora n=1 -> del caso anterior veo que la función con n=1, da 2, y quedaría 2 * 2 = 4
  console.log(multiply([2,2,2],3))
    // multiply([2,2,2], 3 - 1) * arr[3 - 1]; ->  multiply([2,2,2], 2 ) * arr[2]; -> n=2 entonces se vuelve a llamar a la función y * arr[2]=2 
    // ahora n=2 -> del caso anterior veo que la función con n=2, da 4, y quedaría 4 * 2 = 8
  console.log(multiply([1,2,3,4,5],7))
    //si el array tiene 5 elementos, y le piden la multiplicación de los primeros 7 elementos.. lógico dará error
  console.log(multiply([0,1,2],2))
    //cualquier cosa multiplicada por el primer elemento, que es cero, dará siempre cero
  console.log(multiply([-1,3,7],3))
    //idem anteriores pero con un nro negativo

//SUMA los primeros n ELEMENTOS de un arreglo:
  function sum(arr, n) {
    if (n <= 0) {
      return 0; //defino que la suma de ningún elemento o negativo dará cero
    }  else {
      return sum(arr, n-1) + arr[n-1]
    }
    }
    
    console.log(sum([1],0))
    console.log(sum([2, 3, 4], 1))
    console.log(sum([2, 3, 4, 5], 3))
    //sum([2,3,4,5],3-1)+arr[3-1] -> 
    //sum([2,3,4,5],2)+arr[2] ->
    //sum([2,3,4,5],2-1)+arr[2-1]+arr[2] ->  
    //sum([2,3,4,5],1)+arr[1]+arr[2] ->
    //sum([2,3,4,5],1-1)+arr[1-1]+arr[1]+arr[2] ->
    //0+arr[0]+arr[1]+arr[2] -> 
    //0+2+3+4
    //9


    function countup(n) {
      if (n < 1) {
        return [];
      } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
      }
    }
    console.log(countup(0));
    console.log(countup(1));
    console.log(countup(2));
    console.log(countup(3));
    console.log(countup(4));
    console.log(countup(5));

    /* const countArray = countup(5 - 1)
    countArray.push(5);

     */

    function countdown(n){
      if (n < 1) {
        return [];
      } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
      }
    }
    console.log(countdown(6));

    function factorial(n) {
      if (n === 1) return n;
      
      return n * factorial(n - 1); // 2 * 1 - just what we need
    }
    
