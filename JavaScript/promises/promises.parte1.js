// requisições http 
let resposta = {}

let promise = new Promise((resolve, reject) => {
    try {
        // throw new Error('Houve um erro kk')

        setTimeout(() => {
            resposta = { dados: { msg: 'Recuperamos os dados com sucesso' } }
            resolve('Sucesso')
        }, 3000)
    } catch (e) {
        setTimeout(() => {
            reject(e)
        }, 3000)
    }
})

console.log(promise)

setTimeout(() => {
    console.log(promise)
    console.log(resposta)
}, 4000)