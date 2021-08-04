/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function calcularVenda(codigoProduto, qtd) {
    let preco = 0
    switch (codigoProduto) {
        case 100:
            preco =  3; break
        case 200:
            preco =  4; break
        case 300:
            preco =  5.5; break
        case 400:
            preco =  7.5; break
        case 500:
            preco =  3.5; break
        case 600:
            preco =  2.8; break
        default:
            return 'Produto não existente.'
    }
    return qtd * preco
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
