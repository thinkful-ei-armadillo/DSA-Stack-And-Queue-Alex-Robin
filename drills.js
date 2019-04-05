const { Stack, peek, isEmpty, display, displayR, is_palindrome, sortStack, matchingParentesis} = require('./stack');
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

// enqeue (stack#, value){
//  
class StackToQueue{
  constructor(){
    this.first = null;
    this.last = null;
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }
  enqueue(value){
    if(this.first === null){
      this.firstStack.push(value);
      this.first = this.firstStack.top;
      this.last = this.firstStack.top;
    }
    else{
      this.secondStack.push(value);
      this.last = this.secondStack.top;
    }
  }
  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.firstStack.pop();
    if(!isEmpty(this.secondStack)){
      while(this.secondStack.top.next !== null){
        this.firstStack.push(this.secondStack.pop());
      }
      let temp1st = this.secondStack.pop();
      while(!isEmpty(this.firstStack)){
        this.secondStack.push(this.firstStack.pop());
      }
      this.firstStack.push(temp1st);
      this.first = this.firstStack.top;
      this.last = (isEmpty(this.secondStack)) ? this.firstStack.top : this.secondStack.top;
    }else{
      this.first = null;
      this.last = null;
    }
    return node;
  }
}
function Stackdisplay(queue) {
  let current = queue.first;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}
function twoStackQueue(){
  const stack2queue = new StackToQueue();
  stack2queue.enqueue('Spock');
  stack2queue.enqueue('McCoy');
  stack2queue.enqueue('Kirk');
  stack2queue.dequeue();
  stack2queue.dequeue();
 
 
  console.log(stack2queue);

}

twoStackQueue();
// stackTest();