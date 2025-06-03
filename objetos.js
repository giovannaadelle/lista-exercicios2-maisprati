// Objetos/conceitos abstratos representam melhor as coisas do mundo real
// O que um objeto tem (características)? Livros tem titulo, autor, n° de paginas, etc
// O que ele faz? Um controle é capaz de abrir e fechar o portão
// Como ele está? Novo, usado, lido, lacrado, sujo, pago, etc

// let livro = {
//     nome: 'Marley e Eu',
//     anoLancamento: 2024,
//     autor: 'Will Smith',
//     nrPaginas: 12,
//     genero: 'comédia',
//     atores: ['Scooby', 'Super Cão', 'Batcão'],

//     mostrarCaracteristicas: function() {
//         return `${this.nome} é um livro para ficar alegre.` // this representa um objeto interno
//     }

// }

// console.log(livro.mostrarCaracteristicas())
// console.log(livro.nome)

// let livro2 = livro // clonagem por referência
// livro2.preco = 20.2
// console.log(livro)
// console.log(livro2)

// let filme = {
//     titulo: 'High School Musical',
//     anoLancamento: 2007,
//     atores: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'],
//     genero: 'guerra',

//     mostrarCaracteristicas: function() {
//         return `${this.titulo} é um filme de drama`
//     }
// }

// console.log(filme.mostrarCaracteristicas())

// // Object factory

// function Anime (nome, maisForte, maisFraco, nota) {
//     return {
//         nome,
//         maisForte,
//         maisFraco,
//         nota
//     }
// }

// let anime1 = Anime("Naruto", "Gehma", "Konohamaru", 5)
// let anime2 = Anime("One Piece", "Coby", "Ace", 5)
// console.log(anime1)
// console.log(anime2)

// // NOVAS ESTRUTURAS DE REPETIÇÃO
// // FOR IN: itera sobre índices, serve para indexar valores

// let jogadores = ['Caça rato', 'Ganso', 'Pato']

// for(let key in jogadores) {
//     console.log(jogadores[key])   // mostra array jogadores na posição 'key' (índice) 
// }

// // FOR OF: itera sobre valores


// let palavra = 'Grêmio'

// for(let key of palavra) {
//     console.log(key)        // itera várias vezes a mesma palavra
// }

// for(let key of palavra) {
//     console.log(palavra)    // itera cada letra da palavra
// }

// // só pode iterar sobre objetos se usar assim. Ex: Object.keys(anime1)
// // iterar com for normal da undefined (não funciona) - objeto não tem indexação normal

// for(let value of Object.keys(anime1)) {
//     console.log(anime1[value])
// }

// Calcule as médias das notas de uma turma e digam se ela está aprovada

let professor = {
    nome: 'Stark Parker',
    materia: 'Fisica',
    notas: {
        aluno1: [5, 2],
        aluno2: [3, 7]
    }
}

let somaNotas = 0
let numeroAlunos = 0

for(let aluno in professor.notas) {
    somaNotas += Array.isArray(professor.notas[aluno]) ?           // verifica se é um array, se não for é só somar
    professor.notas[aluno].reduce((acc, nota) => acc + nota, 0) /   // reduce reduz os valores para um valor só 
    professor.notas[aluno].length : professor.notas[aluno]        // variável acc acumula valores a partir de zero                

    numeroAlunos++                                                //divide o valor reduzido pelo tamanho do array
                                                                  // itera o número de alunos a cada repetição
}

console.log(somaNotas)
let media = somaNotas / numeroAlunos
console.log(media)

if (media >= 6) {
    console.log('A turma foi aprovada')
} else {
    console.log('A turma foi reprovada')
}

