/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function verificacaoDeString (string1, string2) {
    string1 = string1.toLowerCase().split("")
    string2 = string2.toLowerCase().split("")

    for(let i of string1) {
        if (string2.indexOf(i) < 0) return false
    }

    for(let i of string2) {
        if (string1.indexOf(i) < 0) return false
    }

    return true
    
}

console.log(verificacaoDeString('abc','cba'))
