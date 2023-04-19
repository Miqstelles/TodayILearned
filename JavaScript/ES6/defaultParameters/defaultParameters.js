function contarUmaHistoria(personagem, atividade, nomeDono) {
    return `Era uma vez um cachorro chamado ${personagem}, ele adorava ${atividade}, seu dono era o ${nomeDono} e eles viveram feliz para sempre!`
}

document.getElementById('teste').innerHTML = contarUmaHistoria('fuba', 'voar', 'jhonson')