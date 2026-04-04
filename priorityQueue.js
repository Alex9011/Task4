class PriorityQueue {
  constructor() {
    this.items = [];
    this.nextOrder = 0;
  }

  enqueue(item, priority) {
    const entry = {
      item: item,
      priority: priority,
      order: this.nextOrder
    };

    this.items.push(entry);
    this.nextOrder += 1;
  }

  getIndex(options) {
    if (!options) {
      return -1;
    }

    if (this.items.length === 0) {
      return -1;
    }

    if (options.oldest === true) {
      return 0;
    }

    if (options.newest === true) {
      return this.items.length - 1;
    }

    if (options.highest === true) {
      let best = 0;

      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i].priority > this.items[best].priority) {
          best = i;
        }
      }

      return best;
    }

    if (options.lowest === true) {
      let best = 0;

      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i].priority < this.items[best].priority) {
          best = i;
        }
      }

      return best;
    }

    return -1;
  }

  peek(options) {
    const index = this.getIndex(options);

    if (index === -1) {
      return null;
    }

    return this.items[index].item;
  }

  dequeue(options) {
    const index = this.getIndex(options);

    if (index === -1) {
      return null;
    }

    const removed = this.items.splice(index, 1)[0];
    return removed.item;
  }
}

const q = new PriorityQueue();

q.enqueue("apple", 2);
q.enqueue("banana", 5);
q.enqueue("orange", 5);
q.enqueue("kiwi", 1);

console.log(q.peek({ highest: true }));
console.log(q.peek({ lowest: true }));
console.log(q.peek({ oldest: true }));
console.log(q.peek({ newest: true }));
console.log(q.dequeue({ highest: true }));
console.log(q.dequeue({ oldest: true }));
console.log(q.peek({ highest: true }));
