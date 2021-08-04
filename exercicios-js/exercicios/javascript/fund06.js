/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function calcularMontanteJurosSimples(capitalInicial, taxaDeJuros, tempoAplicacao) {
    return formatarEmReais(capitalInicial * (1 + taxaDeJuros * tempoAplicacao))
}

function calcularMontanteJurosCompostos(capitalInicial, taxaDeJuros, tempoAplicacao) {
    return formatarEmReais(capitalInicial * (1 + taxaDeJuros) ** tempoAplicacao)
}

function formatarEmReais(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`
}

console.log(calcularMontanteJurosSimples(100, 10/100, 2));
console.log(calcularMontanteJurosCompostos(100, 10/100, 2));
