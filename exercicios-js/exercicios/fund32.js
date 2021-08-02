/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function mediaVetor (vetor) {
    let soma = 0
    for(let i of vetor) {
        soma += i
    }
    return soma/vetor.length
}

const vetor = [1, 2, 3, 4, 5]
console.log(mediaVetor(vetor))