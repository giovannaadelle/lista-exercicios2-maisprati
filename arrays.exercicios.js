// EXERCICIOS ARRAYS E FUNÇÕES

// 1. Obtendo elementos de um array
// getFirstElement([1, 2]) deve retornar 1.

function getFirstElement(arr) {
return arr[0]
}

console.log(getFirstElement([1, 2]))

// arr é uma variável comum

/////////
// 2. Definindo elementos de um array
// setFirstElement([1, 2], 3)deve retornar [3, 2].

function setFirstElement(arr, num) {
arr[0] = num
return arr
}

console.log(setFirstElement([1, 2], 3))

//////////////
// 3. Array length
// Como string, arrays possuem a propriedade length (que retorna o n° de elementos do array)

function getLastElement (arr) {
    let lastIndex = arr.length - 1
    return arr[lastIndex]
}

console.log(getLastElement([1, 2, 3, 4]))

/////////////
// 4. Ordenação de arrays

function bubbleSort (arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {      // Percorre o array várias vezes

        for (let j = 0; j < n - 1; j++) {     // Em cada passada, compara elementos adjacentes
            if (arr[j] > arr[j + 1]) {        // Se estiverem fora de ordem, troca os elementos
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }

    }

    return arr
}

console.log(bubbleSort([4, 5, 2, 1, 3]))