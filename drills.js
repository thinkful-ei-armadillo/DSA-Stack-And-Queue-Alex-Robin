const { Stack, 
  peek, isEmpty, display, displayR, is_palindrome, sortStack, matchingParentesis} = require('./stack');

//Drill 1: Create a stack class:

function stackTest() {
  let stack = new Stack();
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  stack.push('Kirk');
  stack.push('Sulu');
  // stack.pop();
  // stack.pop();
  // stack.pop();
  // displayR(stack);
  // console.log(is_palindrome('madam'));
  // console.log(is_palindrome('madffam'));
  // console.log(matchingParentesis('hii(df)'))
  // console.log(matchingParentesis('(())()()))()()'))
  // console.log('[{( correct', matchingParentesis('([]){}'))
  // console.log('[{( wrong', matchingParentesis('([]}){}'))
  stack = sortStack(stack);
  display(stack);
}

stackTest();