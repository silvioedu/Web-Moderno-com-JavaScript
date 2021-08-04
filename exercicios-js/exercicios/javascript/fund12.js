/* Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(n) {
    return n == 0 ? 1 : n * fatorial(n-1)
}

console.log(fatorial(10))