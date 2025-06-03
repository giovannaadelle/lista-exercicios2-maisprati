// Recursividade -> quando uma função chama a outra (ex: boneca russa, fatorial, etc) /
// Dividir um problema grande em problemas menores

// Função de fatorial com recursividade

function fatorial(n) {
    if (n == 1) {
        return 1 
    } else {
        return n * fatorial(n-1)
    }
} 

console.log(fatorial(1))  // ilustração do conceito de pilha
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))

//////////

// soma dos numeros de 1 até n com recursividade

function soma(n) {
    if (n == 1) {
        return 1
    } else {
         return n + soma(n - 1)
    }
    
} 

// return soma precisa retornar um número e não uma função

// 1 + soma(0)
// 2 + soma(1)
// 3 + soma(2)
// 4 + soma(3)
// 5 + soma(4)     // Primeiro a entrar é o ultimo a sair na ordem de processamento (pilha)


// console.log(soma(5))  // 5 + 4 + 3 + 2 + 1 = 15

// No caso if (n === 0), você só está dando um console.log('Valor nulo'), mas não está retornando nenhum valor numérico.
// Isso faz com que undefined entre na soma recursiva, o que pode dar erro.

///////////////////
// Fibonacci recursivo - teremos dois casos base (0 e 1)

function fibonacci(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(9))
console.log(fibonacci(10)) // Empilha tudo e depois vai desempilhando para fazer as operações matemáticas

////////////////
// Imprimir categorias de forma recursiva

let categorias = [
    {
        id: 1,
        nome: 'Eletronicos',
        filhos: [
            {id: 2, nome: 'Celulares', filhos: []},
            {id: 3, nome: 'Computadores', filhos: [
                {id: 4, nome: 'Tablets', filhos: []},
            ]}
        ]
    },
    {
        id: 5,
        nome: 'Louças',
        filhos: []
    }
]

function imprimirCategorias(lista, nivel = 0) {
    for(let categoria of lista) {
        console.log(" ". repeat(nivel * 2) + categoria.nome)   // cria os espaços
        if(categoria.filhos.length > 0) {
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
} 

imprimirCategorias(categorias) 