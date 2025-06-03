// let livraria = [
//     {titulo: '1984', autor: 'George Orwell', ano: 1984},
//     {titulo: 'O Profeta', autor: 'Endrew Berthold', ano: 2001},
//     {titulo: "Código Limpo", autor: "Martin", ano: 2010},
//     {titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910},
//     {titulo: "O Príncipe", autor: "Maquiável", ano: 2002},
// ]


///////////////////////
//Iterar com FOR OF para mostrar os livros lançados antes de 2000

// for (let livro of livraria) {
//     if (livro.ano < 2000) {
//         console.log(livro)
//     }
// }

///////////////////////
// Listar a contagem de generos desses filmes

let filmes = [
    {titulo:"Sempre ao seu lado", genero: "De chorar"},
    {titulo:"Massacre da Serra Elétrica", genero: "Terror"},
    {titulo:"Minha Mãe é uma Peça", genero: "Comédia"},
    {titulo:"Tarzan", genero: "Aventura"},
    {titulo:"Como eu Era Antes de Você", genero: "De chorar"},
    {titulo:"Jogo da Imitação", genero: "Histórico"},
    {titulo:"Top Gun", genero: "Guerra"}, 
]

let contagemFilmes = {}            //TENTAR ENTENDER DEPOIS

filmes.forEach((filme) => {
    if (contagemFilmes[filme.genero]) {
        contagemFilmes[filme.genero]++
    } else {
        contagemFilmes[filme.genero] = 1
    }
})

console.table(contagemFilmes)

for (let genero in contagemFilmes) {
    console.log(`Estão presentes na lista ${contagemFilmes[genero]} filmes do gênero ${genero}`)
}

/////////////////
// FUNÇÃO GENÉRICA AGRUPAR E SOMAR PROPRIEDADES DE ARRAY DE OBJETOS 

// Agrupa um array de objetos por uma propriedade e soma os valores de outra.
// @param {Array} array - Array de objetos a ser processado.
// @param {string} grupoPor - Propriedade para agrupar (ex: 'cliente').
// @param {string} somaProp - Propriedade a ser somada (ex: 'total').
// @returns {Object} - Objeto com chaves = valores de 'grupoPor' e valores = soma de 'somaProp'.


function agruparESomar(array, grupoPor, somaProp) {
    return array.reduce((acumulador, item) => {
      const chave = item[grupoPor];
      acumulador[chave] = (acumulador[chave] || 0) + item[somaProp];
      return acumulador;
    }, {});
  }


