//Algoritmo que transforma graus Celsius em graus Fahrenheit

const prompt = require('prompt-sync')()

// grausCelsius = Number(prompt('Valor em graus Celsius:'))

// grausFahrenheit = grausCelsius * 1.8 + 32
// console.log(`Temperatura em Fahrenheit: ${grausFahrenheit}`)

////////////////////////////////////////

// let totalEleitores = Number(prompt("Digite o número total de eleitores do município:"))
// let votosBrancos = Number(prompt("Digite o número de votos em branco:"))
// let votosNulos = Number(prompt("Digite o número de votos nulos:"))
// let votosValidos = Number(prompt("Digite o número de votos válidos:"))

// let percentualBrancos = votosBrancos / totalEleitores * 100
// let percentualNulos = votosNulos / totalEleitores * 100
// let percentualValidos = votosValidos / totalEleitores * 100

// console.log(`O percentual de votos em branco é ${percentualBrancos}%, o de nulos é ${percentualNulos}% e o de válidos é ${percentualValidos}%`)

//////////////////////////////////////

//A turma C é composta de 60 alunos, e a turma D de 20 alunos. 
// Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de 
// aprovados na turma D, calcule e escreva:

//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

// let percentualReprovasC = Number(prompt("Digite o percentual de reprovas:"));
// let totalC = 60

// let reprovadosC = totalC * percentualReprovasC / 100
// console.log(`O número de reprovas na turma C é de ${reprovadosC}`)

// //////////

// let percentualAprovadosD = Number(prompt("Digite o percentual de reprovas:"))
// let totalD = 20

// let reprovadosD = ((100 - percentualAprovadosD) * totalD) / 100
// console.log(`O número de reprovas na turma C é de ${reprovadosD}`)


// let totalAlunos = totalC + totalD
// let relaçãoReprovadosTotal = reprovadosC + reprovadosD * totalAlunos / 100 


/////////////////////////

// let diaDaSemana = Number(prompt('Digite o dia da semana:'))

// if (diaDaSemana == 'sabado' || 'domingo') {
//     console.log('fim de semana')
// } else {
//     console.log('dia útil')
// }                                            //PODE USAR SWITCH TAMBÉM, FICA MAIS LIMPO


//////////////////////////

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido 
// for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. 
// Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

// let numero = Number(prompt('Digite o número:'))

// while (numero !== 0) {
//     console.log(numero)

//     if (numero > 0) {
//         console.log('Este número é positivo')
//     } else {
//         console.log('Este número é negativo')
//     } break
// }


/////////////////////////////

//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. 
// Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". 
// Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e 
// o algoritmo encerrado. Considere que a senha correta é o valor 2807.

