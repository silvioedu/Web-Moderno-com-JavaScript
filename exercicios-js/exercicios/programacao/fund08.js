/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplicar(numero1, numero2) {
    let resultado = 0
    while(numero2 > 0) {
        resultado += numero1
        numero2--
    }
    return resultado
}

console.log(multiplicar(5, 5)) // retornará 25
console.log(multiplicar(0, 7)) // retornará 0
