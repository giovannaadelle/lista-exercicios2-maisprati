// 1. Validação de Datas

function dataValida(dia, mes, ano) {   
    if (ano <= 0) return false
    if (mes < 1 || mes > 12) return false
   
    let meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let dias_no_mes = meses[mes - 1]  //descobrir o index
    
    if ((ano % 4 === 0) && (ano % 400 == 0 || ano % 100 != 0)) {
        meses[1] = 29
    } 

    if (dia < 1 || dia > meses[mes - 1]) return false 

    return true
} 

console.log(dataValida(18, 6, 2000))
console.log(dataValida(1, 2, 1900))
console.log(dataValida(29, 2, 2000))
console.log(dataValida(29, 2, 2001))
console.log(dataValida(31, 9, 2025))
console.log(dataValida(31, 0, 2024))

//////////////////////////
// 2. Jogo de Adivinhação

const prompt = require('prompt-sync')()
let numero = Math.floor(Math.random() * 100) + 1
let contador = 1
let palpite = null

while (palpite !== numero) {
    palpite = Number(prompt('De um palpite de número: '))

    if (palpite > numero) {
        console.log (`Mais baixo | Tentativas: ${contador}`)
    } else {
        console.log (`Mais alto | Tentativas: ${contador}`)
    }

    contador++
    
    
} console.log (`Você acertou! O número é ${numero} | Tentativas: ${contador}`)

//////////////////////////
// 3. Palavras Únicas

let frase = String(prompt('Escreva uma frase com palavras repetidas: '))
let arr = frase.split(' ')
let palavrasUnicas = []

for(let i = 0; i < arr.length; i++) {
    if(!palavrasUnicas.includes(arr[i])) {
        palavrasUnicas.push(arr[i])
    }
}

console.log(palavrasUnicas)

//// outra opção

let frase = String(prompt('Escreva uma frase com palavras repetidas: '))
let arr = frase.split(' ')
let palavrasUnicas = [new Set(arr)]

console.log(palavrasUnicas)

//////////////////////////
// 4. Fatorial recursivo

function fatorial(n) {
    if (n === 0) {
        return 1
    } else if (n < 0) {
        throw new Error ('Não existe fatorial de n° negativo')
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(4))
console.log(fatorial(0))
console.log(fatorial(-1))

//////////////////////////
// 5. Debounce

function saudacao(nome) {
    console.log(`Olá, ${nome}`)
}

function debounce(fn, delay) {
    let timer
    return function(...args) {
        clearTimeout(timer) 
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const fnDebounced = debounce(saudacao, 5000)

fnDebounced('Maria')

//////////////////////////
// // 6. Memoization

function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = JSON.stringify(args)

        if(cache.has(key)){
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

function somaDigitos(n) {
    if(n < 10) return n

    ultimo_digito = n % 10
    resto = Math.floor(n / 10)
    return ultimo_digito + somaDigitos(resto)
        
} 

const fastSoma = memoize(function somaDigitos(n) {
    if(n < 10) return n

    ultimo_digito = n % 10
    resto = Math.floor(n / 10)
    return ultimo_digito + somaDigitos(resto)
  
})

console.log(fastSoma(123))
console.log(fastSoma(892833453))
console.log(fastSoma(123123))
console.log(fastSoma(123))

//////////////////////////
// 7. Mapeamento e ordenação

let produtos = [{nome: 'camiseta', preco: 20}, {nome: 'saia', preco: 15}, {nome: 'vestido', preco: 50}]

let mapped = produtos.map(function (nome, index) {
  return { index: index, value: nome }
})

mapped.sort(function (a, b) {
  if (a.value.nome < b.value.nome) return -1
  if (a.value.nome > b.value.nome) return 1
  else return 0
})

let result = mapped.map(function (nome) { // container para o resultado ordenado
  return produtos[nome.index]
})

console.log(result)

//////////////////////////
// 8. Agrupamento por propriedade

let vendas = 
[{cliente: 'Ana', total: 100}, 
{cliente: 'Julia', total: 90}, 
{cliente: 'Marcela', total: 120},
{cliente: 'Ana', total: 50},
{cliente: 'Julia', total: 25},
{cliente: 'Marcela', total: 60},]

let totalPorCliente = vendas.reduce((acumulador, venda) => {  // acumulador = folha em branco
    let {cliente, total} = venda
    acumulador[cliente] = (acumulador[cliente] || 0) + total
    return acumulador}, {})

console.log(totalPorCliente)


//////////////////////////
// 9. Conversão entre formatos

let array = [['nome', 'Giovanna'], ['idade', 25], ['profissão', 'jornalista']]

function paresParaObjeto(pares) {
    let objeto = Object.fromEntries(pares)
    return objeto
}

console.log(paresParaObjeto(array))

//Fazendo o inverso

let objeto = {
    nome: 'Giovanna',
    idade: 25,
    profissao: 'jornalista' 
}

function objetoParaPares(obj) {
    let array = Object.entries(obj)
    return array
}

console.log(objetoParaPares(objeto))