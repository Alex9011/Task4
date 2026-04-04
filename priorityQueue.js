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

  peek(highest, lowest, oldest, newest) {
    return null;
  }

  dequeue(highest, lowest, oldest, newest) {
    return null;
  }
}

const q = new PriorityQueue();
q.enqueue("apple", 2);
console.log(q.peek(true, false, false, false));
