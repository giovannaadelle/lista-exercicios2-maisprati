

// Gerenciador de tarefas usando lista duplamente encadeada

class Node {
    constructor(tarefa) {
        this.tarefa = tarefa
        this.proximo = null
        this.anterior = null
        this.status = false
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }


inserirFim(v) {
    let novo = new Node (v)
    if(!this.head) {
        this.head = this.tail = novo
    } else {
        this.tail.proximo = novo
        novo.anterior = this.tail
        this.tail = novo
    } 

    this.length++
}


imprimirFrente() {
    let atual = this.head
    let str = ""

while(atual) {
    str += atual.tarefa + " -> "
    atual = atual.proximo
    }

    str += 'null'
    console.log(str)

}

concluirTarefa(nomeTarefa) {
    let atual = this.head
    
    while (atual) {
        if (atual === nomeTarefa) {
            atual.status == true 
            console.log (`A tarefa ${nomeTarefa} foi concluída`)
            return
        }
        atual = atual.proximo
    }
}




}


const lista = new doublyLinkedList

lista.inserirFim('Ir na academia')
lista.inserirFim('Estudar JS')
lista.inserirFim('Fazer almoço')
lista.inserirFim('Lavar roupa')

lista.imprimirFrente()

