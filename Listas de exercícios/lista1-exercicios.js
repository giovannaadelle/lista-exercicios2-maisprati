const prompt = require('prompt-sync')()

// // 1. Par ou ímpar
// let numero = Number(prompt('Insira o número para verificar se é PAR ou ÍMPAR:'))

// if (numero % 2 == 0) {
//     console.log('Este número é par')
// } else {
//     console.log('Este número é ímpar')
// }

// //////////////////////////////

// // 2. Classificando idades
// let idade = Number(prompt('Insira a idade da pessoa:'))

// if (idade < 13) {
//     console.log('Criança')
// } else if ( idade <= 18) {
//     console.log('Adolescente')
// } else if (idade < 60) {
//     console.log('Adulto')
// } else {
//     console.log('Idoso')
// }

// ////////////////////////////////

// // 3. Classificando notas 
// let nota = Number(prompt('Insira a nota:'))

// if (nota > 7) {
//     console.log('Aprovado')
// } else if ( nota >= 5 ) {
//     console.log('Recuperação')
// } else {
//     console.log('Reprovado')
// }

// /////////////////////////////

// // 4. Menu interativo
// let semaforo = prompt('Insira a cor para ver a ordem de comando:')

// switch (semaforo) {
//     case 'Vermelho':
//         console.log('Pare')
//         break

//     case 'Amarelo':
//         console.log('Espere')
//         break

//     case 'Verde':
//         console.log('Siga')
//         break

//     default:
//         console.log('Opção inválida')
// }

// ////////////////////////

// // 5. IMC
// let peso = Number(prompt('Insira seu peso em KG:'))
// let altura = Number(prompt('Insira sua altura em metros:'))
// let IMC = peso / (altura * altura)

// if (IMC < 19.1) {
//     console.log('Baixo peso')
// } else if (IMC < 25.8) {
//     console.log('Peso normal')
// } else if (IMC < 28) {
//     console.log('Sobrepeso')
// } else if (IMC > 28) {
//     console.log('Obesidade')
// }

// ///////////////////

// // 6. Classificando triângulos

// let A = Number(prompt('Insira o tamanho do lado A:'))
// let B = Number(prompt('Insira o tamanho do lado B:'))
// let C = Number(prompt('Insira o tamanho do lado C:'))

// if ((A < B + C) && (B < A + C) && (C < A + B)) {
//     if ((A==B) && (B==C)) {
//         console.log('Este triângulo é equilátero')
//     } else if ((A!=B) && (B!=C)) {
//         console.log('Este triângulo é escaleno')
//     } else if ((A==B) || (A==C) || (B==C)) {
//         console.log('Este triângulo é isóceles')
//     }
// } else {
//     console.log('Não é possível formar um triângulo com essas medidas')
// }

// ///////////////////

// // 7. Contagem maçãs

// let numeroMacas = Number(prompt('Total de maçãs compradas:'))
// let precoUnitario = 0.30
// let precoUnitarioDuzia = 0.25
// let valorCompra = 0

// if (numeroMacas < 12) {
//     valorCompra = precoUnitario * numeroMacas
// } else {
//     valorCompra = precoUnitarioDuzia * numeroMacas
// }

// console.log('O valor da compra é R$', valorCompra)


// ///////////////////

// // 8. Ordenação valores

// let num1 = Number(prompt('Insira o primeiro valor:'))
// let num2 = Number(prompt('Insira o segundo valor:'))

// if (num1 < num2) {
//     console.log(`Ordem crescente: ${num1}, ${num2}`)
// } else {
//     console.log(`Ordem crescente: ${num2}, ${num1}`)
// }

// ///////////////////

// // 9. Contagem regressiva

// for (i = 10; i > 0; i--) {
//     console.log(i)
// }

// ///////////////////

// // 10. Repetição número

// let num = 5
// let r

// for (r = 0; r < 11; r++ ) {
//     console.log(num)
// }

// ///////////////////

// // 11. Soma prompt com FOR

// let num1 = Number(prompt('Insira o primeiro valor:'))
// let num2 = Number(prompt('Insira o segundo valor:'))
// let num3 = Number(prompt('Insira o terceiro valor:'))
// let num4 = Number(prompt('Insira o quarto valor:'))
// let num5 = Number(prompt('Insira o quinto valor:'))


// let soma = 0
// let contadora = 0

// for (contadora = 1; contadora <= 5; contadora++) {
//     let input = num1, num2, num3, num4, num5
//     soma += input
// }

// console.log(`O valor da soma é ${soma}`)



// ///////////////////

// // 12. Tabuada

// let numeroTabuado = Number(prompt('Insira um número para saber a tabuada dele: '))
// let contadora = 1

// for (contadora = 1; contadora <= 10;) {
//     console.log(`${numeroTabuado} X ${contadora} = ${numeroTabuado * contadora}`)
//     contadora++
// }

// ///////////////////

// // 13. Média aritmética

// let resposta = 0
// let soma = 0
// let contador = 0

// do {resposta = Number(prompt('Insira as notas com décimos: (Para calcular a média insira 0)'))
//     soma += resposta
//     if (resposta != 0){
//         contador++
//     } 
// } while (resposta != 0)

// let mediaFinal = soma/(contador)
// console.log(`A média final é ${mediaFinal}`)

// ///////////////////

// // 14. Fatorial

// let numero = Number(prompt('Insira o número para calcular o fatorial dele: '))   //número de entrada 

// resultado = 1   // acumulador que começa em 1, porque é multiplicação
// contadora = 1   //  forma de multiplicar os números de 1 até numero (usando while ou for)

// while (contadora <= numero) {   // fatorial é a multiplicação de todos os inteiros positivos menores ou iguais ao número
//     resultado *= contadora      // multiplica o resultado pelo valor atual do contador
//     contadora += 1              // aumenta o contador em 1
// }

// console.log(`O fatorial de ${numero} é ${resultado}`)


// ///////////////////

// 15. Sequência de Fibonacci

let valorAnterior = 1
let valorAtual = 1
let soma 

console.log(valorAnterior)
console.log(valorAtual)

for (contador = 3; contador <= 10; contador++) {
    soma = valorAnterior + valorAtual
    console.log(soma)
    valorAnterior = valorAtual
    valorAtual = soma
}





 