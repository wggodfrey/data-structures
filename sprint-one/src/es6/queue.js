class Queue {

  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.size() > 0) {
      let item = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return item;
    }
  }

  size() {
    return this.tail - this.head;
  }
}
