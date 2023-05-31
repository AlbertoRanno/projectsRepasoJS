//generate a random whole number that falls within a range of two specific numbers.

Math.floor(Math.random() * (max - min + 1)) + min
//Math.random() nro aleatorio entre 0 (inclusive) y 1 (exclusive)
//Math.floor() redondea hacia el nro entero anterior
/*Supongo max=8 y min=3
 Math.floor(Math.random() * (8 - 3 + 1)) + 3
 Math.floor(Math.random() * (6)) + 3
 Math.random() nunca puede ser 1 -> (Math.random() * (6)) nunca puede ser 6
 por lo que a lo sumo Math.floor(Math.random() * (6)) puede dar 5
 con el + 3 = 9 Máximo
 Por otra parte Math.random() puede dar 0, por lo que  Math.floor() tmb daría 0, por lo que 0 + 3 = 3 Mínimo
  */