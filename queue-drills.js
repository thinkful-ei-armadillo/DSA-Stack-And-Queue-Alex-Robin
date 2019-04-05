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
  console.log(doubleQueue.first.value);
}

// queueTest();

//drill #8: Square dancing

function sortDancers(dancers) {
  const men = new Queue();
  let women = new Queue();
  for (let i = 0; i < dancers.length; i++) {
    if (dancers[i].gender === 'F') {
      //if there are no available men, add to queue
      if (isEmpty(men)) {
        women.enqueue(dancers[i].name);
      } else {
        const man = men.dequeue();
        console.log(`Female dancer is ${dancers[i].name}, and the male dancer is ${man}`);
      }
    } else {
      //if there are no available women, add to queue
      if (isEmpty(women)) {
        men.enqueue(dancers[i].name);
      } else {
        const woman = women.dequeue();
        console.log(`Female dancer is ${woman}, and the male dancer is ${dancers[i].name}`);
      }
    }
  }
  //if there are left-over men:
  if (!isEmpty(men)) {
    let length = 0;
    let current = men.first;
    while (current !== null) {
      length++;
      current = current.next;
    }
    console.log(`There are ${length} male dancers waiting to dance`);
  }
  //if there are left-over women:
  if (!isEmpty(women)) {
    let length = 0;
    let current = women.first;
    while (current !== null) {
      length++;
      current = current.next;
    }
    console.log(`There are ${length} female dancers waiting to dance`);
  }
}

const dancers = [
  {
    gender: 'F',
    name: 'Jane'
  },
  {
    gender: 'M',
    name: 'Frank'
  },
  {
    gender: 'M',
    name: 'John'
  },
  {
    gender: 'M',
    name: 'Sherlock'
  },
  {
    gender: 'F',
    name: 'Madonna'
  },
  {
    gender: 'M',
    name: 'David'
  },
  {
    gender: 'M',
    name: 'Christopher'
  },
  {
    gender: 'F',
    name: 'Beyonce'
  }
];

sortDancers(dancers);