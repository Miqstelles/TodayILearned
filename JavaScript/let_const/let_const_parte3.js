// escopos: global, funcão, bloco
const SERIE = 'TWD'
console.log(`função: ${SERIE}`)

function escopoFuncao() {
    const SERIE = 'sss'
    console.log(`função: ${SERIE}`)

    if (true) {
        if (true) {

        }
    }

}

escopoFuncao()

{
}