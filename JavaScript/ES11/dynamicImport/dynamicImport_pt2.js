// (estático) carregando o módulo antes da necessidade de utilizá-lo
// import { saudacao, getEnderecoByCep } from "./import/lib.mjs";

document.querySelector('#btnSaudacao').addEventListener('click', () => {
    import('./import/lib.mjs')
        .then(module => console.log(module.saudacao()))
})

document.querySelector('#btnCEP').addEventListener('click', () => {
    let cep = document.querySelector('#cep').value

    import('./import/lib2.mjs')
        .then(module => {
            if (cep.length === 8) {
                module.getEnderecoByCep(cep)
                    .then(dados => console.log(dados))
            }
        })
})



