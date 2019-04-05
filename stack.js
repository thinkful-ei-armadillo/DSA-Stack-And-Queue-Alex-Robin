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
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let firstHalf;
  let secondHalf;
  if(s.length % 2 === 0){
    firstHalf = s.slice(0, s.length/2);
    secondHalf = s.slice(s.length/2);
  } else{
    firstHalf = s.slice(0, Math.floor(s.length/2));
    secondHalf = s.slice(Math.ceil(s.length/2));
  }
  const newStack = new Stack();

  for(let i = 0; i < firstHalf.length; i++){
    newStack.push(firstHalf[i]);
  }
  for(let i = 0; i < secondHalf.length; i++){
    if(secondHalf[i] !== newStack.pop())
      return false;
  }
  return true;
}

module.exports = {
  Stack,
  peek,
  isEmpty,
  display,
  displayR,
  is_palindrome
};