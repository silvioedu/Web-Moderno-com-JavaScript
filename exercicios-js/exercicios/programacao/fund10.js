/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

const simboloMais = numero => console.log(Array(numero).fill('+').join(''))

simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"