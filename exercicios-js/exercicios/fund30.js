/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function maiorMenor(vetor) {
    vetor = vetor.sort((a, b) => a-b)
    return [vetor[0], vetor[vetor.length-1]]
}

const vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maiorMenor(vetor))