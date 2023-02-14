// escopos: global, funcão, bloco
var serie = 'Breaking Bad'
console.log(`global: ${serie}`)
function escopoFuncao() {

    console.log(`funcao: ${serie}`)
}

escopoFuncao()

if (true) {
    var serie2 = 'Mr Robot'
    console.log(`bloco: ${serie2}`)
}

{
    console.log(`bloco ${serie}`)
}