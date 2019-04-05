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

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
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

function peek(stack) {
  if (stack.top !== null) {
    return stack.top.data;
  } else {
    return null;
  }
}

function isEmpty(stack) {
  return !stack.top;
}

function display(stack) {
  let current = stack.top;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

function displayR(stack, node = stack.top) {
  if (node !== null) {
    console.log(node.data);
    displayR(stack, node.next);
  }
}

module.exports = {
  Stack,
  peek,
  isEmpty,
  display,
  displayR
};