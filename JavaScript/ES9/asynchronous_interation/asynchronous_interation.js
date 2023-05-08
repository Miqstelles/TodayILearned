let processos = [1, 2, 3, 4, 5]

let iteracaoASsincrona = async () => {
    for (let processo of processos) {
        // processamentos assíncronos
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Processamento assincrono')
                resolve()
            }, 2000)
        })
        console.log(processo)
    }
}

iteracaoASsincrona()