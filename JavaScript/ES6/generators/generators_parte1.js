function* testeGenerator() {
    yield 'Teste 1'
    yield 'Teste 2'
    yield 'Teste 3'

    return 'Teste 4'
}

let meuGenerator = testeGenerator() // objeto iterator

console.log(meuGenerator.next())
console.log('-------')

console.log(meuGenerator.next())
console.log('-------')

console.log(meuGenerator.next())
console.log('-------')

console.log(meuGenerator.next())
