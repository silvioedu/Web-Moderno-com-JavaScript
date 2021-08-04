/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

const vetor = [1, 2, 3, 4, 5]

function multiplicar(vetor, multiplicador) {
    let resultado = []
    vetor.forEach(element => {
        resultado.push(element * multiplicador) 
    });
    return resultado
}

const multiplicadorMaiorQue5 = (vetor, multiplicador) => multiplicador > 5 ? multiplicar(vetor, multiplicador) : vetor

console.log(multiplicar(vetor, 3))
console.log(multiplicadorMaiorQue5(vetor, 6))
