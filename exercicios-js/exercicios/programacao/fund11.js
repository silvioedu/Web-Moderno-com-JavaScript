/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array: */

const receberPrimeiroEUltimoElemento = elements => [elements.shift(), elements.pop()]

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"])) // retornará [7, "olá"]
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])) // retornará [-100, 16]
