let processoAssincrono = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso no processo assíncrono'), 3000)
})

async function recuperarDados() {
    await processoAssincrono.then(p => console.log(p))

    console.log('Processamento assíncrono 1')
    await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(r => r.json())
        .then(d => console.log(d))

    console.log('Processamento assíncrono 2')
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(d => console.log(d))

    console.log('Processamento assíncrono 3')

    return 'Fim'
}

recuperarDados().then(param => console.log(param))