// É possível implementar pilhas com arrays e listas
// Estrutura -> 

// Implementação de pilha com lista encadeada
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null   // top é equivalente a head
//     }

//     // Inserir nó no topo da pilha
//     push(value) {
//         let newNode = Node(value)
//         newNode.next = this.top  // está dizendo que o próximo do newNode é o topo da pilha
//         this.top = newNode
//     }

//     pop(value) {                    
//         if(!this.top) return null
//         let poppedValue = this.top.value  // remove o ultimo elemento que entrou
//         this.top = this.top.next
//         return poppedValue
//     }

//     peek() {
//         if(!this.top) return null
//         return this.top.value

//     }

//     isEmpty() {
//         return this.top == null
    
// }}



// Implementação com arrays

class arrayStack {
    constructor() {
        this.items = []
    }

    // Adiciona elemento no topo
    push(element) {
        this.items.push(element)
    }

    isEmpty() {
        if (this.items == null)
        return console.log ('Pilha vazia')
    }

    // Remove e retorna elemento do topo
    pop() {
        if (this.isEmpty()) {
            return console.log ('Pilha vazia')
        }
        return this.items.pop()
    }

    print() {
        console.log(this.items.toString())
    }
}

const stack = new arrayStack()

stack.push(10);
stack.push(20);
stack.push(30);

stack.print()

stack.pop()
stack.pop()
stack.pop()

stack.isEmpty()



