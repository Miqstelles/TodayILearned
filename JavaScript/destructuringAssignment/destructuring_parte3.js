let arr = [10, 20, 30, 40]

// function teste([a, b]) { // destructuring
// function teste([a, b, , c]) {// pular valores
function teste([a, b, , c, d = 520]) {// parametros padrões
    console.log(a, b, c, d)
}

// teste(arr[0], arr[1])
// teste(arr)

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

// function teste2({ c, d }) {
// function teste2({ c, d: x }) { // aplidos
function teste2({ c, d: x, t = 100 }) { // aplidos
    console.log(c, x, t)
}

// teste2(obj.a, obj.b)
teste2(obj)

