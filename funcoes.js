const prompt = require('prompt-sync')()

// function RetornaParOuImpar (valor) {
//     let resultado

//     if(valor % 2 === 0 ) {
//         resultado = 'PAR'
//     } else {
//         resultado = 'ÍMPAR'
//     }
//     return resultado
// }

// let numero = 10  
// let resultado = RetornaParOuImpar(numero) // passagem de parâmetro por referência
// console.log(resultado)

// console.log(RetornaParOuImpar(5)) // passagem de parâmetro por número

///////////////////////////////////
// Função que calcula área

// function calculaArea (altura, largura) {
//     return altura * largura
// }

// console.log(calculaArea(10,10))

///////////////////////////////////
// Função que retorna array ordenado

// let array = [1, 0, 2, -2]

// function arrayOrdenado (array) {
//     return array.sort((a, b) => a - b) // função anônima (não recebe parâmetros)

// } 

// console.log(arrayOrdenado(array))
// console.log(arrayOrdenado([10, 4, 2, 1])) 
// console.log(arrayOrdenado(['a', 'j', 'd' ])) // não funcionou com letras

///////////////////////////////////
// Função sem parâmetros
// function mostrarSaudacao() {
//     console.log("Olá, bem-vindo!")
//   }
  
//   //exemplo de função sem parametro.
//   //ela só da um console.log, logo não precisa de um valor passado como parametro
  
//   mostrarSaudacao()

///////////////////////////////////
// Funções que são passadas como parâmetro para outras funções

//   let sucesso = () => console.log('Requisição foi um sucesso') 

//   let erro = function() {
//     console.log('Requisição deu errado')
//   }

//   function requisicao(sucesso, erro) { // Função que recebeu duas funções anônimas
//     if (true) {
//         sucesso()
//     } else {
//         erro()
//     }
//   }

//   requisicao(sucesso, erro)

///////////////////////////////////
// Somando os elementos de array com função

// function somaArray (arr) {
//     let soma = 0
    
//     for (let i = 0; i < arr.length; i++) {
//         soma += arr[i]
//     }
//     console.log(soma)
// }

// console.log(somaArray ([1, 2, 3, 4, 5]))

///////////////////////////////////
//Achando maior valor do array com a função

// function maiorValor (arr) {
//     let maior = arr[0]

//     for(let i = 0; i < arr.lenght; i++) {
//         if(arr[i] > maior) {
//             maior = arr[i]
//         }
//     } 

//     console.log(maior)
// }

// maiorValor([1, 100, -3, 2, 0])

///////////////////////
//Contruir uma função que calcula o fatorial de um número

// function fatorial(numero) {
//     let fatorial = 1

//     for (let i = 1; i <= numero; i++) {
//         fatorial = fatorial * i
//     }

//     console.log(fatorial)
// }

// fatorial(5)
// fatorial(2)

///////////////////////
// Imprimir 10 primeiros números da sequência de Fibonacci
// terceiro elemento é a soma dos dois anteriores

// function fibonacci() {
//     let a = 0
//     let b = 1
//     let temp   // SOMA DOS DOIS VALORES ANTERIORES

//     console.log(a)
//     console.log(b)

//     for (let i = 3; i <= 10; i++) {   //TEM QUE SER <= SENÃO NÃO PARA DE IMPRIMIR
//         temp = a + b
//         console.log(temp)
//         a = b          // A RECEBE VALOR DE B, E B RECEBE VALOR DE TEMP
//         b = temp
//     }

// }

// fibonacci()

///////////////////////
//Função de PA 

// function PA (primeiroTermo, razao) {
//     let soma = 0

//     for (let i = 0; i < 10; i++) {
//         termo = primeiroTermo + razao * i
//         termo += soma
//         console.log(termo)
//     }
// }

// PA(0, 2)