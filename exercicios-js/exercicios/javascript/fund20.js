/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function sacarDinheiro(valorSaque) {
    const notas = [100, 50, 10, 5, 1]
    let qtd = 0

    for(let i in notas) {
        if (valorSaque >= notas[i]) {
            qtd = Math.trunc(valorSaque / notas[i])
            console.log(`${qtd} nota(s) de R$ ${notas[i]}`)
            valorSaque -= qtd * notas[i]
        }
    }
}

sacarDinheiro(153);
sacarDinheiro(283);

