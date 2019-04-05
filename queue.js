class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class DoubleQueue{
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data, null, null);

    if(this.first === null){
      this.first = node;
    }
    if (this.last) {
      node.prev = this.last;
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue(){
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.prev = null;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }


}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  return queue.first.value;
}

function isEmpty(queue) {
  return !queue.first;
}

function display(queue) {
  let current = queue.first;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

module.exports = { DoubleQueue, Queue, peek, isEmpty, display };