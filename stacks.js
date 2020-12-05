// NODE CLASS //

class _Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }
  // STACK CLASS //
  class Stack {
    constructor() {
      this.top = null;
    }
    push(data) {
      if (this.top === null) {
        this.top = new _Node(data, null);
        return this.tops;
      }
      const node = new _Node(data, this.top);
      this.top = node;
    }
    pop() {
      const node = this.top;
      this.top = node.next;
      return node.data;
    }
  }
  
  function main() {
    const starTrek = new Stack();
    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("McCoy");
    starTrek.push("Scotty");
    console.log(starTrek);
  }
  main();