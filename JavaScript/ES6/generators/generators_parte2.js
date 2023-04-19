function* conversar() {
    // escopo própio
    // opcao

    // 1 bloco
    let opcao = yield 'Eai, susa?'

    // 2 bloco
    // o parametro enviado no next
    if (opcao === 'sim') {
        yield 'Otimo fico feliz'
        opcao = yield 'Como posso te ajudar? Quer uma piada?'

        if (opcao === 'sim') {
            fetch('dados/piadas.json')
                .then(resposta => resposta.json())
                .then(piadas => {
                    let piada = piadas[Math.floor(Math.random() * 10)]
                    console.log(piada.piada)
                    setTimeout(() => {
                        console.log(piada.resposta)
                        console.log('ATUMALACA')
                    }, 4000)
                })

            yield 'Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente'
        } else {
            yield 'Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente'
        }
    }
    else {
        yield 'Respire fundo e tenha paciencia'
        yield 'Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente'
    }

    return 'Atendimento finalizado'
}
let conversa = conversar()

function acao() {
    let resposta = document.querySelector('#resposta').value

    let iteracao = conversa.next(resposta)
    console.log(iteracao)

    if (iteracao.done) {
        document.querySelector('#teste').style.display = 'none'
    }
}

