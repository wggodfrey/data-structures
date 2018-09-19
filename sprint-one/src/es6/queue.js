class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
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
  }

}
