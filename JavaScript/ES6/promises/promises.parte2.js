let promise = new Promise((resolve, reject) => {
    // try {
    // } catch (e) {
    // }

    // requisição http para recuperar uma relação de usuarios
    setTimeout(() => {
        // requisição realizada de algum modo
        let resposta_da_requisicao = {}

        // erro na requisicão 
        if (false) {
            resposta_da_requisicao = {
                codigo: 1050,
                erro: 'Falha de autorização'
            }
            reject(resposta_da_requisicao)
        }

        resposta_da_requisicao = {
            0: { id: 1, nome: 'João' },
            1: { id: 2, nome: 'José' },
            2: { id: 3, nome: 'Maria' },
        }

        resolve(resposta_da_requisicao)
    }, 4000)
}).then(dados => {
    console.log(dados)
    let promise2 = new Promise((resolve, reject) => {
        // requisição para recupar uma relação de posts dos usuários
        setTimeout(() => {

            // requisição realizada de algum modo
            let resposta_da_requisicao = {}

            // erro na requisicão 
            if (false) {
                resposta_da_requisicao = {
                    codigo: 7788,
                    erro: 'Erro ao recuperar os posts dos usuários'
                }
                reject(resposta_da_requisicao)
            }

            resposta_da_requisicao = {
                0: {
                    id: 1, usuario_id: 1, posts: [
                        { id: 1, post: 'Post 1' },
                        { id: 2, post: 'Post 2' }
                    ]
                },
                1: {
                    id: 2, usuario_id: 2, posts: [
                        { id: 3, post: 'Post 32' },
                        { id: 4, post: 'Post 4' }
                    ]
                },
                2: {
                    id: 3, usuario_id: 3, posts: [
                        { id: 5, post: 'Post 5' },
                        { id: 6, post: 'Post 6' }
                    ]
                },
            }

            resolve(resposta_da_requisicao)
        }, 4000)
    }).then(dados => {
        console.log(dados)
    }).catch(erro => {
        console.log(erro)
    })
}).then(param => {
    console.log('then n2', param)
}).then(() => {
    console.log('then n3')
}).then(() => {
    console.log('then n4')
}).catch(erro => {
    console.log('Operação sequencial: ', erro)
    return 'Param capturado e enviado para o then seguinte'
}).then(param => {
    console.log(param ? 'then n5 ' + param : 'then n5')
})

