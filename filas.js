// Muito usado em e-commerce (servidor de nuvem)

class nodeDuplo {
    constructor(value    ) {
        this.value = value;      // O dado que o nó armazena
        this.next = null   // Referência para o próximo nó
        
    }
}

class Queue {
    constructor() {
    this.front = null  // Equivalente a lista, só muda o nome
    this.rear = null   
    this.size = 0  
    }

    enqueue(value) {
        let newNode = new Node(value)
        if(this.rear) {
            this.rear.next = newNode
        }

        this.rear = newNode

        if(!this.front) {
            this.front = newNode
        }
        this.size++
    }

    dequeue() {       // this.front precisa sair primeiro
        if(!this.front) return null
        let dequeued = this.front.value  // remove o primeiro elemento que entrou
        this.front = this.front.next
        return dequeued
    }

    front() {
        
    }
}