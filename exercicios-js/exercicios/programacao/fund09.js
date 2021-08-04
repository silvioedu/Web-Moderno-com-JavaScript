/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado. */

const repetir = (item, qtde) => console.log(Array(qtde).fill(item))

repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
