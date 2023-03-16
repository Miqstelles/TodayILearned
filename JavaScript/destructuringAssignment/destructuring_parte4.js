//destructuring assignment com rest

//array 
let arr = [10, 20, 30, 40]
let [a, b, ...x] = arr
console.log(a, b, x)

// objetos
let obj = { a: 10, b: 20, c: 30, d: 40 }
let { a: p, c, ...resto } = obj
console.log(p, c, resto)