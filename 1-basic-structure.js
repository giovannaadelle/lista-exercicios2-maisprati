// console.log('A gíria "mané" é muito utilizada no RJ)
// console.log("A gíria 'mané' é muito utilizada no RJ")
// console.log(`Jaques Hyago`)

// console.log(typeof('Olá, mundo!'))
// console.log(typeof(1.5))

// let titulosDoInter = null
// console.log(titulosDoInter)

// let num1 = 9
// let num2 = 3

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)

//PRIORIDADES
// (), **, * e /, + e -

// let num = '10'
// console.log(parseInt(num) + 10)

/////////////////////////////////

// let counter = 1
// console.log(--counter)
// console.log(++counter)
// console.log(counter--)
// console.log(counter)

// let step = 2

// counter += step
// counter += step
// counter += step
// counter += step
// counter += step
// console.log(counter)

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 >= 5)
// console.log(10 == 5)
// console.log(10 == 10)
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != 10)
// console.log(10 !== '10')

console.log((10 < 5) && (10 > 2))
console.log((10 < 5) || (10 > 2))
console.log(!(10 < 5) || (10 > 2))

let usuario = 'jaques'  // declarar variável sem preposição é crime
let senha = '1234'

let autenticacao = usuario === 'jaques' && senha === '1234'
console.log(autenticacao)

const nota = 60

if (nota < 60) {
    console.log('reprovado')
} else if (nota > 90) {
    console.log('bichão mesmo')
} else {
    console.log('aprovado')
}

(nota < 60) ? console.log('reprovado') : console.log('aprovado') // usar operador ternário em IF pequeno só

/////////////////////////////////////////


//Exercício 1: verificar se um número é par ou ímpar

// let numero = 0

// if (numero % 2 != 0) {
//     console.log('ímpar')
// } else {
//     console.log('par')
// }

// (numero % 2 != 0) ? console.log('ímpar') : console.log('par')

//Exercício 2: encontrar o maior entre três números

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt('Insira o primeiro valor: '))
// let num2 = Number(prompt('Insira o segundo valor: '))
// let num3 = Number(prompt('Insira o terceiro valor: '))

// if ((num1 > num2) && (num1 > num3)) {
//     console.log(`O número ${num1} é o maior`)
// } else if ((num2 > num1) && (num2 > num3)) {
//     console.log(`O número ${num2} é o maior`)
// } else if ((num3 > num1) && (num3 > num2)) {
//     console.log(`O número ${num3} é o maior`)
// } else {
//        console.log('Os números são iguais')}




//Exercício 3: façam uma calculadorada simples utilizando entrada do usuário.

// const prompt = require('prompt-sync')()

// let valor1 = Number(prompt('Insira o primeiro valor: '))
// let valor2 = Number(prompt('Insira o segundo valor: '))
// let op = prompt('Informe a operação desejada: (+, -, *, /):')
// let resultado = 0

// if(op === '+') {
//     resultado = valor1 + valor2
// } else if(op === '-') {
//     resultado = valor1 - valor2
// } else if(op === '*') {
//     resultado = valor1 * valor2
// } else if(op === '/') {
//     if(valor2 !== 0){
//         resultado = valor1/valor2
//     } else {
//         console.log ('Erro: divisão por zero')
//         resultado = undefined
//     }
// } else {
//     console.log ('Operação inválida')
//     resultado = undefined
// }

// if (resultado !== undefined) {
//     console.log ('Resultado: ', resultado)
// }


// //Calculadora usando switch
// const prompt = require('prompt-sync')()

// let valor1 = Number(prompt('Insira o primeiro valor: '))
// let valor2 = Number(prompt('Insira o segundo valor: '))
// let op = prompt('Informe a operação desejada: (+, -, *, /):')
// let resultado = 0


// switch (op){
//     case '+': 
//         resultado = valor1 + valor2
//         break
//     case '-':
//         resultado = valor1 - valor2
//         break
//     case '*':
//         resultado = valor1 * valor2
//         break
//     case '/':
//         resultado = valor1 / valor2
//         break
//     default: 
//     console.log('Operação inválida')
//     resultado = undefined
//     break
// } 

// if (resultado !== undefined) {
//    console.log ('Resultado: ', resultado)
// }

// //Exercício 2: verificar se um número é positivo, negativo ou zero

// const prompt = require('prompt-sync')()

// let valor = Number(prompt('Insira um valor numérico: '))

// if (valor === 0) {
//     console.log('Este número é zero')
// } else if (valor % 2 !== 0) {
//     console.log('Este número é ímpar')
// } else if (valor % 2 === 0) {
//     console.log('Este número é par')
// }




