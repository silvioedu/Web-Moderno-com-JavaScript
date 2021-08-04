/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */

const somarNumeros = array => array.reduce((acum, atual) => acum + atual, 0)

console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60
