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

// sortDancers(dancers);

// Drill #9: The Ophidian Bank

function ophidianBankSim() {
  //set up a fake queue
  const line = new Queue();
  //add a bunch of 'fake' people
  line.enqueue('Bob');
  line.enqueue('Robin');
  line.enqueue('Alex');
  line.enqueue('Ethan');
  line.enqueue('Payman');
  line.enqueue('Secil');
  line.enqueue('Michael');
  line.enqueue('Zol');
  line.enqueue('Michael');
  line.enqueue('Matt');
  line.enqueue('David');
  line.enqueue('Geordie');
  line.enqueue('Daniel');
  line.enqueue('Owen');
  line.enqueue('Chris');
  line.enqueue('Hunter');
  line.enqueue('Ali');
  line.enqueue('Andrew');
  line.enqueue('william');
  line.enqueue('Jon');
  line.enqueue('Jake');
  line.enqueue('Andre');
  line.enqueue('Tauhida');
  //now we're going to simulate, the service
  let current = line.first;
  let iteration = 0; //sets a limit to operation
  while (current !== null && iteration < 40) {
    const succeed = Math.random() < 0.75;
    const person = line.dequeue();
    if (succeed) {
      console.log(`Ophidian Bank served ${person} successfully`);
    } else {
      console.log(`Ophidian bank was unable to serve ${person}`);
      line.enqueue(person);
    }
    current = current.next;
    iteration++;
  }
  let numLeft = 0;
  let counter = line.first;
  while (counter !== null) {
    numLeft++;
    counter = counter.next;
  }
  console.log(`There are ${numLeft} people left to serve`);
}

ophidianBankSim();