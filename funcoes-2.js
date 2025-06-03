// let nome = 'Julio César'

// console.log(nome.length)
// console.log(nome.charAt(0))
// console.log(nome.indexOf('C'))

// console.log(nome.replace('Julio', 'Cleyton'))
// console.log(nome.

///////////////////////////////////
// INVERTER UMA STRING

function inverterString(str) {
    let strInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
    return strInvertida;
  }
  console.log(inverterString("wesley"))
  console.log(inverterString("giovanna"))

///////////////////////////////////
// PEGAR AS VOGAIS DA STRING
//   let palavra = "GIOVANNA"
//   let vogais = ""
  
//   for (let i = 0; i < palavra.length; i++) {
//       if ("aeiouAEIOU".includes(palavra[i])) {
//           vogais += palavra[i]
//       }
//   }
  
//   console.log(vogais)

///////////////////////////////////
// RETORNAR NUMERO DE VOGAIS DA STRING

// function countVowels(str) {
//     let vowels = str.match(/[aeiou]/gi) //REGEX (EXPRESSÃO REGULAR)
//     return vowels ? vowels.length : 0
// }

// console.log(countVowels('Dragon Age'))

///////////////////////////////////
//GERAR UMA NUMERO ALEATÓRIO ENTRE DOIS VALORES

// function randomNumber(num) {
//     return Math.floor(Math.random() * num)
//   }
//   console.log(randomNumber(5))


// function randomNumber(num, num2) {
//     return Math.floor(Math.random() * (num + num2))
//   }
//   console.log(randomNumber(1, 5))


///////////////////////////
// FUNÇÃO DEBOUNCE
// serve para adiar a execução de uma função até que ela pare de ser 
// chamada por um tempo (por exemplo, 300 milissegundos).


function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // limpa o anterior
    timeoutId = setTimeout(() => {
      func.apply(this, args); // executa depois do delay
    }, delay);
  };
}

console.log(debounce(inverterString, 300))



///////////////////////////
// FUNÇÃO MEMOIZATION (memorização)
// memoização é o armazenamento de resultados de chamadas de função custosas

// Uma função pura simples para obter um valor adicionando 10
const adicionar = (n) => (n + 10);
console.log('Chamada simples', adicionar(3));
// Uma função de memoizar simples que recebe uma função
// e retorna uma função memoizada
const memoizar = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  // pegando apenas um argumento aqui
    if (n in cache) {
      console.log('Obtendo do cache');
      return cache[n];
    }
    else {
      console.log('Calculando o resultado');
      let resultado = fn(n);
      cache[n] = resultado;
      return resultado;
    }
  }
}
// Criação de uma função memoizada para a função pura 'adicionar'
const adicionarMemoizado = memoizar(adicionar);
console.log(adicionarMemoizado(3));  // calculado
console.log(adicionarMemoizado(3));  // em cache
console.log(adicionarMemoizado(4));  // calculado
console.log(adicionarMemoizado(4));  // em cache

/////////////////////////
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
function fibonacci(n) {
  if(n < 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)  //função recursiva
}

const fastFib = memoize(function fibonacci(n) {
  if(n < 2) return n
  return fastFib(n - 1) + fastFib (n -2)
}) 

console.log(fastFib(47))
console.log(fibonacci(47))