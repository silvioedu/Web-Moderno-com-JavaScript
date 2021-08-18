const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // mulher chinesa com menor salário?
    const mulherChinesa = funcionario => funcionario.genero == 'F' && funcionario.pais == 'China'
    const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual
    const mulherChinesaMenorSalario = 
        funcionarios
            .filter(mulherChinesa)
            .reduce(menorSalario)
    
    console.log(mulherChinesaMenorSalario)
})

