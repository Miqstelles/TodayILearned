class Pessoa {
    constructor(nome = '', idade) {
        this.nome = nome
        this.idade = idade
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

class Aluno extends Pessoa {
    constructor() {
        super('Pedro', 16) // constructor da classe pai
        this.notas = { t1: 7, t2: 8, p1: 6, p2: 9 }
    }

    mediaFinalPonderada() {
        let m = this.notas.t1 * 2
        m += this.notas.t2 * 2
        m += this.notas.p1 * 3
        m += this.notas.p2 * 3
        m = m / 10

        return m
    }
}

let aluno = new Aluno()
console.log('Aluno: ', aluno.mediaFinalPonderada())
aluno.saudacao()