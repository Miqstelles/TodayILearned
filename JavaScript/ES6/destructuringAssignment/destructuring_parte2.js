// destructuring no contexto de objetos

let produto = {
    descricao: 'Notebook',
    preco: 2500,
    detalhes: {
        fabricante: 'Abc',
        modelo: 'Xyz'
    }
}

//token (arrays) => []
//token (objetos) => {}

// let { descricao, preco } = produto
// console.log(descricao, preco)

// nomear as variaveis com outros nomes
// let { descricao: d, preco: p } = produto
// console.log(d, p)

// valores default para lidar com atributos undefined
// let { descricao: d = 0, preco: p = 0, desconto = 5 } = produto
// console.log(d, p, desconto)

// extrair atributos de objetos pertencentes a atributos do objeto principal
let { descricao, detalhes: { fabricante, modelo } } = produto
console.log(descricao, fabricante, modelo)
