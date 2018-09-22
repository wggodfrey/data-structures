class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
  	this.storage = {};
  	this.length = 0;
  }

  enqueue(value) {
  	let index = this.length === 0? 0: Object.keys(this.storage).sort(function(a,b) { return b - a })[0];
      // debugger;
      this.length++;
      this.storage[index + 1] = value;
  }

  dequeue() {
  	let index = Object.keys(this.storage).sort(function(a,b) { return a - b })[0];
  	let firstIn = this.storage[index];
  	delete this.storage[index];
  	this.length--;
  	if (this.length < 0) { this.length = 0; }
  	return firstIn;
  }

  size() {
  	return this.length;
=======
    this.count = 0;
    this.storage = {};
>>>>>>> origin/pair
  }

  enqueue(value) {
    for (var i = this.count - 1; i >=0; i--) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[0] = value;
    this.count++;
  }

  dequeue() {
    if (this.count > 0) {
      var result = this.storage[this.count - 1];
      this.count--;
      return result;
    }
  }

  size() {
    return this.count;
  }
}
