// (estático) carregando o módulo antes da necessidade de utilizá-lo
// import { saudacao, getEnderecoByCep } from "./import/lib.mjs";

document.querySelector('#btnSaudacao').addEventListener('click', async () => {
    const modulo = await import('./import/lib.mjs') // promise
    console.log(modulo.saudacao())
})

document.querySelector('#btnCEP').addEventListener('click', async () => {
    let cep = document.querySelector('#cep').value
    const modulo = await import('./import/lib.mjs') // promise

    if (cep.length === 8) {
        modulo.getEnderecoByCep(cep)
            .then(dados => console.log(dados))
    }
})



