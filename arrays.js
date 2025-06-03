// VETORES UNIDIMENSIONAIS

//Array = locação de memória contínua e limitada

let listaFrutas = Array()
let listaNomes = ['Giovanna', 'Augusto']

listaFrutas[0] = 'Morango'
listaFrutas[1] = 'Maçã'
listaFrutas['adocicadas'] = 'Pera'

for(let i = 0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i])
}

console.log(listaFrutas)
console.table(listaFrutas)

// listaFrutas.push('Melancia') //Insere elemento no final
// listaFrutas.unshift('Laranja')  //Insere no início

// listaFrutas.pop()  //Remove do final
// listaFrutas.shift()  //Remove do início

// console.log(listaFrutas)

let listaCoisas = Array()    
listaCoisas['hardware'] = ['Placa de vídeo']  //passar assim constrói matriz
listaCoisas['hardware'][1] = 'Smartwatch'     // hardware e games são arrays, 
listaCoisas['games'] = ['GTA VI']              // listaCoisas é um array multidimensional (matriz)
listaCoisas['games'][1] = 'The Witcher'

console.table(listaCoisas)
console.table(listaCoisas['hardware'])  //exibindo um array por vez
console.table(listaCoisas['games'])


////////////////////////////////////////

// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.
// Use métodos de array para calcular:
// A soma de todos os elementos

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// SOMA COM REDUCE()
//método reduce() percorre o array e acumula um valor (como uma soma).
// let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
// console.log(soma)


// A média dos elementos (SOMA COM LOOP FOR)
// let soma = 0
// let media = 0

// for(let i = 0; i < numeros.length; i++) {
//     soma += numeros[i]
// }

// console.log(soma)

// media = soma / numeros.length  // retorna o tamanho do array
// console.log(media)


///////////////////////////////////
// Gere um novo array chamado pares que contenha apenas os números pares de numeros.

// Imprima no console:
// O array original 'numeros'
// A soma
// A média
// O array pares
// Ordene o array em ordem crescente

let numeros = [2, 6, 1, 9, 7, 4, 5, 10, 3, 8]

///////////////////////////////
// SOMA DOS TERMOS DO ARRAY (FOR EACH)

// let soma = 0
// numeros.forEach(num => soma += num)
// console.log(soma)

///////////////////////////////
// MÉDIA ARITMÉTICA DOS TERMOS DO ARRAY

// let media = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / numeros.length
// console.log(media)


// IMPRIMIR ARRAY DE N° PARES (COM FILTER)

// let pares = numeros.filter((num => num % 2 === 0))
// console.log(pares)

///////////////////////////////
// IMPRIMIR ARRAY DE N° PARES (COM LOOP FOR)

// let pares = []

// for(let i = 0; i < numeros.length; i++) {
//     if(numeros[i] % 2 === 0) {
//         pares.push(numeros[i])
//         console.log(pares)
//     }
    
// }

 // se o console.log estiver fora imprimi tudo de uma vez, se estiver dentro imprime por etapas

///////////////////////////////
//ORDENANDO ARRAY EM ORDEM CRESCENTE COM LOOP

// for (i = 0; i < numeros.length;i++){
//     for (j = 0; j < numeros.length;j++){
//         if(numeros[j] > numeros[j+1]){  // se n° da esquerda é maior que o da direita, ele troca
//             let temp = numeros[j]      // para trocar, armazena o maior valor na variável temporária temp
//              numeros[j] = numeros[j + 1]
//              numeros[j + 1] = temp
//         }
//     }
    
// }
// console.log(numeros)


// ORDENANDO COM MÉTODO DE ARRAY CHAMADO SORT
// numeros.sort((a, b) => a - b);   // feito para ordenação de coisas

// numeros.sort(((a, b) => a - b))
// console.log(numeros)

// numeros.sort(((a, b) => b - a))  // ordem decrescente
// console.log(numeros)


///////////////////////////////////
// VETORES MULTIDIMENSIONAIS (TERMINAR DE VER AULA)

// let matriz = []
// let soma = 0

// for (let i = 0; i < 3; i++) {
//     matriz[i] = []

//     for(let j = 0; j < 3; j++) {
//         matriz[i][j] = 10
//         if (i == j) {
//             soma += matriz[i][j]
//         }
//     }

// }

// console.table(matriz)
// console.log(soma)

