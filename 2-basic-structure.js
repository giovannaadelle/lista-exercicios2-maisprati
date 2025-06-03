//Exercício 3: verificar se o ano é bissexto

// const prompt = require('prompt-sync')()

// let ano = Number(prompt('Insira o ano: '))

// if (ano % 4 === 0) {
//     console.log('Este ano é bissexto')
// } else {
//     console.log('Este ano não é bissexto')
// }

//Exércicio 4: definam faixas etárias para crianças, adolescentes e adultos e 
// com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária

const prompt = require('prompt-sync')()

let idade = Number(prompt('Insira a idade: '))
let resultado = 0

if (idade < 13) {
    resultado = 'criança'
} else if (13 < idade >= 18) {
    resultado = 'adolescente'
} else if (idade > 18) {
    resultado = 'adulto'
} else {
    console.log('Operação inválida')
    resultado = undefined}

if (resultado !== undefined) {
    console.log('Resultado:', resultado)
}

