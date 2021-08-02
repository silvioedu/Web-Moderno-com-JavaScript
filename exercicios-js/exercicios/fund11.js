/* As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function ehAnoBissexto(ano) {
    if (ano <= 0) return false
    else if (ano % 400 == 0) return true
    else if (ano % 100 == 0) return false
    else if (ano % 4 == 0) return true
    return false
}

console.log(ehAnoBissexto(0))
console.log(ehAnoBissexto(4))
console.log(ehAnoBissexto(100))
console.log(ehAnoBissexto(400))
console.log(ehAnoBissexto(800))
console.log(ehAnoBissexto(2020))
console.log(ehAnoBissexto(2021))

