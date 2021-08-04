/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array. */

const segundoMaior = numeros => numeros.sort((a, b) => b-a)[1]

console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6
