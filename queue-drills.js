const { Queue, peek, isEmpty, display } = require('./queue');

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
  display(queue);
}

queueTest();