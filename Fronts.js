class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Add Front
    addFront(value) {
        const newNode = new Node(value);
        if (this.head !== null) {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this.head;
    }

    // Remove Front
    removeFront() {
        if (this.head === null) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return this.head;
    }

    // Front
    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }
}