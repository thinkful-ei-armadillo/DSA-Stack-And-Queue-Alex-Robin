const { DoubleQueue, Queue, peek, isEmpty, display } = require('./queue');

// Drill #6 
function queueTest() {
  let queue = new Queue();
  queue.enqueue('Kirk');
  queue.enqueue('Spock');
  queue.enqueue('Uhura');
  queue.enqueue('Sulu');
  queue.enqueue('Checkov');
  queue.dequeue();
  queue.dequeue();
  // display(queue);
  let doubleQueue = new DoubleQueue();
  doubleQueue.enqueue('Kirk');
  doubleQueue.enqueue('Spock');
  doubleQueue.enqueue('Uhura');
  doubleQueue.enqueue('Sulu');
  console.log(doubleQueue.first.value)



}

queueTest();