// contexto rest -> utilizado para condensar

function soma(...p) {
    let resultado = 0
    p.forEach(v => resultado += v)
    return resultado
}

let x = soma(5, 7, 49, -12, 1, 56)
console.log('Resultado: ', x)

function multiplicacao(m, ...n) {
    console.log(m)
    console.log(n)
    let resultado = 0
    n.forEach(v => {
        resultado += m * v
    })
    return resultado
}

let y = multiplicacao(5, 7, 12, 13, 49, 2, -11)
console.log(y)