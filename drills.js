const { Stack, 
  peek, isEmpty, display, displayR } = require('./stack');

//Drill 1: Create a stack class:

function stackTest() {
  const stack = new Stack();
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  stack.push('Sulu');
  displayR(stack);
}

stackTest();