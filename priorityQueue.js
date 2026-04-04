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

  getIndex(highest, lowest, oldest, newest) {
    if (this.items.length === 0) {
      return -1;
    }

    if (oldest === true) {
      return 0;
    }

    if (newest === true) {
      return this.items.length - 1;
    }

    if (highest === true) {
      let best = 0;

      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i].priority > this.items[best].priority) {
          best = i;
        }
      }

      return best;
    }

    if (lowest === true) {
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

  peek(highest, lowest, oldest, newest) {
    const index = this.getIndex(highest, lowest, oldest, newest);

    if (index === -1) {
      return null;
    }

    return this.items[index].item;
  }

  dequeue(highest, lowest, oldest, newest) {
    const index = this.getIndex(highest, lowest, oldest, newest);

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

console.log(q.peek(true, false, false, false));
console.log(q.peek(false, true, false, false));
console.log(q.peek(false, false, true, false));
console.log(q.peek(false, false, false, true));
console.log(q.dequeue(true, false, false, false));
console.log(q.dequeue(false, false, true, false));
console.log(q.peek(true, false, false, false));
