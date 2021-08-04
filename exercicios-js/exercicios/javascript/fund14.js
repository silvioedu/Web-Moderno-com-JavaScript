/* Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

function venderFruta(nome) {
    let msg = ''
    switch(nome.toLowerCase()) {
        case 'maçã':
            msg = "Não vendemos esta fruta aqui"
            break
        case 'kiwi':
            msg = "Estamos com escassez de kiwis"
            break
        case 'melancia':
            msg = "Aqui está, são 3 reais o quilo"
            break
        default:
            msg = "Fruta não reconhecida"
            break
    }
    console.log(msg)
}

venderFruta('maçã')
venderFruta('KIWI')
venderFruta('melancia')
venderFruta('alcatra')