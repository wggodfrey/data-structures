class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.length = 0;
  }

  push(value) {
  	debugger;
  	this.length ++;
  	this.storage[this.length - 1] = value;
  }

  pop() {
  	if (this.length === 0) {
  		return;
  	}
  	let lastIn = this.storage[this.length - 1];
  	delete this.storage[this.length - 1];
  	this.length--;
  	return lastIn;
  }

  size() {
  	return this.length;
  }

}