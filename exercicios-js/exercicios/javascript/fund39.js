/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function trocaValores(vetorA, vetorB) {
    console.log(`ANTES vetorA ${vetorA} e vetorB ${vetorB}`)

    if (vetorA.length != vetorB.length) console.log("Vetores de tamanhos diferentes")

    for(let i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }

    console.log(`DEPOIS vetorA ${vetorA} e vetorB ${vetorB}`)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)