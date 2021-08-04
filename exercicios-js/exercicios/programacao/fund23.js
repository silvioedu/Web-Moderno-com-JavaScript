/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

const contarPalavras = palavra => palavra.split(" ").length

console.log(contarPalavras("Sou uma frase")) // retornará 3
console.log(contarPalavras("Me divirto aprendendo a programar")) // retornará 5