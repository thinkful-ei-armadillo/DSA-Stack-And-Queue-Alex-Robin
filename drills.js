const { Stack, 
  peek, isEmpty, display, displayR, is_palindrome} = require('./stack');

//Drill 1: Create a stack class:

function stackTest() {
  const stack = new Stack();
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  stack.push('Sulu');
  stack.pop();
  stack.pop();
  stack.pop();
  displayR(stack);
  console.log(is_palindrome('madam'));
  console.log(is_palindrome('madffam'));
}

stackTest();