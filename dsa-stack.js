class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(item) {
        if (this.top === null) {
            this.top = new _Node(item, null);
        }
        this.top = new _Node(item, this.top);
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    

}

module.exports = {
    Stack,
};
