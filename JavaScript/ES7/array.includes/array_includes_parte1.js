let arr = ['Uva', 'Banana', 'Maça']

// existe um determiando elemento
// let retorno = arr.find(item => item == 'Maça')
// find retorna o valor pesquisado se existente, ou undefined caso não exista

let retorno = arr.includes('Maça')
console.log(retorno)