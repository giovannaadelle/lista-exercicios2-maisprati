const prompt = require('prompt-sync')()

// 1. Cálculo perda de dias de vida 
// let cigarrosPorDia = Number(prompt('Quantos cigarros fuma por dia? '))
// let anos = Number(prompt('Há quantos anos fuma? '))

// let cigarrosNaVida = (cigarrosPorDia * 365) * anos
// let tempoPerdido = cigarrosNaVida * 10
// let tempoEmDias = Math.floor(tempoPerdido / 1440)

// console.log(`Você já perdeu ${tempoEmDias} dias de vida`)

////////////////////
// 2. Multa por excesso de velocidade

// let velocidade = Number(prompt('Insira a velocidade do carro: '))

// if (velocidade > 80) {
//     let kmExcedido = velocidade - 80
//     let valorMulta = kmExcedido * 5
//     console.log('Você foi multado por excesso de velocidade. O valor da multa é R$', valorMulta)
// } else {
//     console.log('Velocidade dentro do limite')
// }


////////////////////
// 3. Cálculo preço de passagem

// let distancia = Number(prompt('Quantos km tem a viagem? '))

// if (distancia <= 200) {
//     let preco1 = distancia * 0.5
//     console.log(`Sua viagem custa R$ ${preco1}`)
// } else {
//     let preco2 = distancia * 0.45
//     console.log(`Sua viagem custa R$ ${preco2}`)
// }

////////////////////
// 4. Formação de triângulo com retas

// let A = Number(prompt('Insira o tamanho da primera reta: '))
// let B = Number(prompt('Insira o tamanho da segunda reta: '))
// let C = Number(prompt('Insira o tamanho da terceira reta: '))


// if ((A < B + C) && (B < A + C) && (C < A + B)) {
//     console.log('É possível formar um triângulo com essas retas')
// } else {
//     console.log('Não é possível formar um triângulo com essas retas')
// }

////////////////////
// 5. Jogo de JoKenPo

// let jogada = String(prompt('Insira sua jogada: '))

// let opcoes = ['Pedra', 'Papel', 'Tesoura']
// let sorteio = opcoes[Math.floor(Math.random() * opcoes.length)]

// if ((jogada == 'Pedra') || (jogada == 'Papel') || (jogada == 'Tesoura')) {
//     console.log(sorteio)
// } else {
//     console.log('Jogada inválida')
// }

////////////////////
// 6. Sorteio de número




////////////////////
//. 7 Aluguel carro

// let carro = String(prompt('Escolha o carro (popular ou luxo): '))
// let quilometragem = Number(prompt('Insira a quilometragem da viagem: '))
// let valorPopular = 0
// let valorLuxo = 0

// if (carro == 'popular') {
//         if (quilometragem < 100) {
//     valorPopular = 90 + (quilometragem * 0.20)
//     } else { 
//     valorPopular = 90 + (quilometragem * 0.10)
//     } console.log(`O valor do aluguel será ${valorPopular}`)
// } else if (carro == 'luxo') {
//     if (quilometragem < 200) {
//         valorLuxo = 150 + (quilometragem * 0.30)
//     } else { 
//         valorLuxo = 150 + (quilometragem * 0.25)
//     } console.log(`O valor do aluguel será ${valorLuxo}`)
// } else {
//     console.log('Opção inválida')
// }


////////////////////
// 8. Programa vida saudável 
// problema que exige pensar na progressividade das faixas de ganho de pontos

// let horasMensais = Number(prompt('horas de atividade físicas mensais: '))
// let pontos = 0

// if (horasMensais <= 10) {
//     pontos = horasMensais * 2  
// } else if (horasMensais <= 20) {
//     pontos = (10 * 2) + (horasMensais - 10) * 5
// } else {
//     pontos = (10 * 2) + (20 * 5) + (horasMensais - 20) * 10
// }

// let valorEmDinheiro = pontos * 0.05
// console.log('O valor a receber é R$', valorEmDinheiro)


////////////////////
// 9. Leitura de salário 

////////////////////
// 10. 'Faça enquanto'



////////////////////
// 11. Progressão aritmética

// function pa (primeiroTermo, razao) {
//     let soma = 0

// for (i = 1; i <= 10; i++) {
//     let termo = primeiroTermo + i * razao
//     console.log(termo)
//     soma += termo
//  }
// }

// console.log(pa(2, 2))





















// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

// let matriz = []
// let soma = 0

// for (let i = 0; i < 3; i++) {
//     matriz[i] = []

//     for(let j = 0; j < 3; j++) {
//         matriz[i][j] = 10
       
//     }

// }

// console.table(matriz)