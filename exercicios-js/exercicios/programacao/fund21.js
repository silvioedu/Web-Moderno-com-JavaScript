/* Criar uma função que receba um array de números e retorne o menor número desse array. */

const menorNumero = numeros => Math.min(...numeros)

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15