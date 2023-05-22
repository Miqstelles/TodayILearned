class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    toString() {
        return `Carro da marca ${this.marca}, modelo ${this.modelo}, ano ${this.ano}`
    }

}

// [object Type]

let carro = new Carro('jeep', 'Renegade', 2021)
console.log(carro.toString())