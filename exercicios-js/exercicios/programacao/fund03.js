/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos. O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o 
salário líquido do funcionário no mês */

const calcularSalarioLiquido = (qtdeHorasTrabalhadas, valorPorHora) => 
    `Salário líquido é igual a R$ ${(qtdeHorasTrabalhadas * valorPorHora * .7).toFixed(2)}`

console.log(calcularSalarioLiquido(180, 60)) // retornará "Salário igual a R$ 7560"
