let p = new Promise((resolve, reject) => {
    if (false) {
        reject('Reijeitada')
    }
    resolve('Resolvida')
})
    .then((resultado) => { console.log(resultado) })
    .catch((rejeitado) => { console.log(rejeitado) })
    .finally(() => {
        console.log('Fluxo se rejeitado ou resolvido')
    })
    .then(() => {
        console.log('Then após o finally')
    })
    .then(() => {
        console.log('Then após o finally 2')
    })