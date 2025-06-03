const prompt = require('prompt-sync')()

// let numeroTabuada = Number(prompt('Qual o número que você quer saber a tabuada? '))

// let contadora = 1

// while(contadora <= 10) {
//     console.log(`${numeroTabuada} X ${contadora} = ${numeroTabuada * contadora}`)
//         contadora++
// }

////////////////////////////////////////////////

// let contadora
// let numeroTabuada = Number(prompt('Número da tabuada? '))

// for (contadora = 0; contadora <= 10; contadora++) {
//     console.log(`${numeroTabuada} X ${contadora} = ${numeroTabuada * contadora}`)
// }

//////////////////////////////////////////////

// let resposta = 0
// let soma = 0
// let contador = 0

// do {resposta = Number(prompt('Insira as notas: (Para calcular a média insira 0)'))
//     soma += resposta
//     if (resposta != 0){
//         contador++
//     } 
// } while (resposta != 0)

// let mediaFinal = soma/(contador)
// console.log(`A média final é ${mediaFinal}`)

/////////////////////////////////////

let resposta = 1
let soma = 0
let contador = 0

while (resposta != 0) {
    resposta = Number(prompt('Insira as notas: (Para calcular a média insira 0)'))
    soma += resposta
    if (resposta != 0) {
        contador++}
}

let mediaFinal = soma/contador
console.log(`A média final é ${mediaFinal}`)