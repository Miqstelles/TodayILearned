import { saudacao, getEnderecoByCep } from "./import/lib.mjs";

console.log(saudacao())

getEnderecoByCep('13010030')
    .then(dados => console.log(dados))