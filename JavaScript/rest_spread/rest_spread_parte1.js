let tituloArtigo = 'Como utilizar o operador rest/spread'

// contexto spread -> utilizado para expandir

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])
console.log({ ...tituloArtigo })

let listaCursos1 = ['NodeJS e MongoDB', 'Angular']
let listaCursos2 = ['Solid', 'Laravel']
let listaCompletaCursos = ['Web Complexto', 'Banco de dados', ...listaCursos1, ...listaCursos2]
console.log(listaCompletaCursos)

let pessoa = { nome: 'Pedro', idade: 32 }
let cadastroCompleto = { endereco: 'Rua Abc', ...pessoa }
console.log(cadastroCompleto)