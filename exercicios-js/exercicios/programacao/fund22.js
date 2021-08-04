/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado. */

function funcaoDaSorte (num) { 
    let numeroSorteado = Math.floor(Math.random() * (10 - 0 + 1)) + 0    
    return numeroSorteado == num ?
        `Parabéns! O número sorteado foi o ${numeroSorteado}.` :
        `Que pena! O número sorteado foi o ${numeroSorteado}.`
}

console.log(funcaoDaSorte(10)) // retornará "Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 3"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 1"