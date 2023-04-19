// escopos: global, funcão, bloco

function escopoFuncao() {

    if (true) {
        if (true) {
            let serie2 = 'Mr Robot'
            var serie = 'Friends'
        }
    }
    console.log(serie)
    console.log(serie2)
}

escopoFuncao()

{

}