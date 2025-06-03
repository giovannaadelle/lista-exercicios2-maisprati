
// let car = {
//     nome: 'McQueen',
//     cor: 'Vermelho'
// }

// let car2 = {
//     nome: 'Sally',
//     cor: 'Azul'
// }

// class carExemplo {
//     constructor(nome, cor) {
//         this.nome = nome
//         this.cor = cor
//     }
// }

// let car3 = new carExemplo('Camaro', 'Amarelo')

// console.log(car.nome)
// console.log(car.cor)

// console.log(car3.nome)
// console.log(car3.cor)

// /////////////////////

// class Node {
//     constructor(valor) {
//         this.valor = valor
//         this.proximo = null
//     } 
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//     }

//     inserirInicio(v) {
//         let novo = new Node(v)
//         novo.proximo = this.head
//         this.head = novo
//     }

//     imprimir() {
//         let atual = this.head
//         let str = ""
        
//         while(atual) {
//             str += atual.valor + "->"
//             atual = atual.proximo
//         }
//         str += 'null'
//         console.log(str)

//     }
// }

// let lista = new LinkedList()

// lista.inserirInicio(10)
// lista.inserirInicio(9)
// lista.imprimir()


// //////////////////////////////////

// Estrutura de nó para lista duplamente encadeada
class nodeDuplo {
    constructor(valor) {
        this.valor = valor;      // O dado que o nó armazena
        this.proximo = null;   // Referência para o próximo nó
        this.anterior = null;  // Referência para o nó anterior
    }
}


class DoublyLinkedList {
    constructor() {
    this.head = null  // A cabeça da lista, inicialmente nula
    this.tail = null   // Em implementações mais robustas, também se mantém uma referência para 'tail' (cauda)
    this.length = 0  
                      
    }
    
    inserirInicio(v) {
        let novo = new nodeDuplo(v)
        if (!this.head) {
            this.head = this.tail = novo
        } else {
            novo.proximo = this.head
            this.head.anterior = novo
            this.head = novo
        }
        this.length++
    }
    
    inserirFim(v) {
        let novo = new nodeDuplo (v)
        if(!this.head) {                    // verifica se a lista está vazia ou ja possui elemento
            this.head = this.tail = novo
        } else {
            this.tail.proximo = novo             // this.tail porque é o ultimo elemento (próximo é NULL)
            novo.anterior = this.tail             // this.head é o primero elemento
            this.tail = novo                      // this.length é o tamanho da lista (começa em zero)
        }
        
        this.length++
    }
    
    imprimirFrente() {
        let atual = this.head
        let str = ""
                
        while(atual) {
        str += atual.valor + "->"
        atual = atual.proximo
        }
        
        str += 'null'
        console.log(str)
    }
    

    imprimirAtras() {
        let atual = this.tail
        let str = ""

        while(atual) {
        str += atual.valor + "<-"
        atual = atual.anterior
        }
        
        str += 'null'
        console.log(str)
    }


// Para chegar até o ponto em que vou inserir um novo elemento eu preciso
// navegar com neles com uso de estruturar de repetição FOR, WHILE, DO WHILE e
// reposicionar os ponteiros

inserirEm (indice) {
    
}


removerEm(indice) {
if(indice < 0 || indice >= this.length) throw RangeError("Índice está fora dos limites!")
        
     let removido

     if(this.length === 1) {
         removido = this.head
         this.head = this.tail = null
     } else if(indice === 0) {
         removido = this.head
         this.head = this.head.proximo
         this.head.anterior = null
     } else if(indice === this.length - 1) {
         removido = this.tail
         this.tail = this.tail.anterior
     this.tail.proximo = null
     } else {
         let atual = this.head
    
         for(let i = 0; i < indice; i++) {
             atual = atual.proximo
         }
    
         removido = atual
         const { proximo, anterior } = atual
         anterior.proximo = proximo
         proximo.anterior = anterior
     }

     this.length--
     return removido
    }
}

const lista = new DoublyLinkedList();
// lista.inserirFim(10);
// lista.inserirFim(20);
// lista.inserirFim(30);


// lista.removerEm(1); // Remove o 20 (índice 1)
// lista.imprimirFrente(); // 10->30->null
// lista.imprimirFrente(); // 10->20->30->null

////////////////////////////


lista.inserirInicio(3)
lista.inserirInicio(2)
lista.inserirInicio(1)
lista.imprimirAtras()

lista.removerEm(0)
lista.imprimirAtras()