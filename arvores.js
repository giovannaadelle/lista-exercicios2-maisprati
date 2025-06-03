class TreeNode {
    constructor(value) {   // criando os nós da árvore
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }

    removeChild(node) {
        this.children = this.children.filter(child => child.value !== value)
    }
}

class Tree {
    constructor(rootValue) {         // criando a árvore
        this.root = new TreeNode
        (rootValue)
    }

    traverseDFS (callback) {               
        function recurse(node) {    
            callback(node)
            node.children.forEach(child => recurse(child))
        }
        recurse(this.root)
    }
    // IMPRIMINDO A ARVORE EM FORMA DE ESQUEMA

    printTree(node = this.root, prefix = '', isLast = true) {
    console.log(prefix + (isLast ? '└──' : '├──') + node.value)

    const childCount = node.children.length
    node.children.forEach((child, index) => {
        const isLastChild = index == childCount - 1
        const newPrefix = prefix + (isLast ? '   ' : '│  ')
        this.printTree(child, newPrefix, isLastChild)
    })
}



}

const tree = new Tree('A')       // montando a árvore

const B = new TreeNode ('B')    
const C = new TreeNode ('C')
const D = new TreeNode ('D')
const E = new TreeNode ('E')
const F = new TreeNode ('F')
const G = new TreeNode ('G')
const H = new TreeNode ('H')

tree.root.addChild(B)   // fazendo os links entre filhos e pais
tree.root.addChild(C)
tree.root.addChild(D)

B.addChild(E)
B.addChild(F)

C.addChild(G)

G.addChild(H)

function printNode(node) {
    console.log(node.value)
}

// tree.traverseDFS(printNode)
tree.printTree()

///////////////////// 
