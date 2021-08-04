/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */

const ehPar = n => n % 2 == 0
const receberSomenteOsParesDeIndicesPares = array => array.filter((numero, indice) => ehPar(numero) && ehPar(indice))

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]