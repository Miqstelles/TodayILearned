// padStart (preenchimento a esquerda)
let codigo = '1000'
// expectativa 0000001000
codigo = codigo.padStart(10, '0')
console.log(codigo)

let codigo2 = '8888'
// expectativa 8888******
codigo2 = codigo2.padEnd(10, '*')
console.log(codigo2)