function OrdenarVetor() {
    let vetor = [5, 2, 65, 22, 43, 15, 1, 10, 4, 7]
    let vetorOrganizado = []

    for (let i = 0; i < vetor.length; i++) {
        let aux = Math.min(...vetor)
        vetorOrganizado.push(aux)
        vetor.splice(vetor.indexOf(aux), 1)
        i--
    }
    console.log(vetorOrganizado)
}

OrdenarVetor()
