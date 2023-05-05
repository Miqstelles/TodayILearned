let objeto = {
    nome: 'Miqs Telles',
    profissional: {
        site: 'miqs.com.br',
        profissao: 'programador',
    },
    hobbies: [
        { id: 1, hobby: 'Acordar' },
        { id: 2, hobby: 'Dormir' },
    ],
    pais: 'Brasil'
}

// console.log(Object.getOwnPropertyDescriptors(objeto))

// Descritor Writable: quando definido com o false, ele indica que o valor da propriedade não podera ser modificada

// Object.defineProperty(objeto, 'nome', {
//     value: 'Miqs Telles',
//     writable: false,
// })

// console.log(Object.getOwnPropertyDescriptors(objeto))

// Descritor Enumerable: quando definido com o false, a propriedade em questão não é exibida em laços de repetição

// for (let propriedade in objeto) {
//     console.log(propriedade, objeto[propriedade])
// }

// Object.defineProperty(objeto, 'hobbies', {
//     enumerable: false
// })

// Object.defineProperty(objeto, 'profissional', {
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptors(objeto))

// console.log('-------------------------------')

// for (let propriedade in objeto) {
//     console.log(propriedade, objeto[propriedade])
// }

// Descritor Configurable: quando definido com o false, indica que a propriedade não pode ser deletada e também não podemos modificar os descritores, exceto a mudança de writable para false

console.log(Object.getOwnPropertyDescriptors(objeto))

Object.defineProperty(objeto, 'pais', {
    configurable: false
})

console.log(Object.getOwnPropertyDescriptors(objeto))
