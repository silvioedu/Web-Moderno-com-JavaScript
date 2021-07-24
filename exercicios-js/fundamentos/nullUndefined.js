let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite atribuir o undefined
console.log(produto)
console.log(!!produto.preco)

produto.preco = null
console.log(produto)
console.log(!!produto.preco)
