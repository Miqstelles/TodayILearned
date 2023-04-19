// destructuring assignment no contexto de arrays

// let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

// let a = frutas[1]
// console.log(a)

// let [a, b] = frutas

// let [a, b, , c] = frutas

let [a, b, c, d, e = 'Banana'] = frutas

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]
let [, [, x]] = coisas
console.log(x)