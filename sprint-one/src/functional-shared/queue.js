var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;

  _.extend(someInstance,queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	let index = this.length === 0? 0: Object.keys(this.storage).sort(function(a,b) { return b - a })[0];
    // debugger;
    this.length++;
    this.storage[index + 1] = value;
}

queueMethods.dequeue = function() {
	let index = Object.keys(this.storage).sort(function(a,b) { return a - b })[0];
	let firstIn = this.storage[index];
	delete this.storage[index];
	this.length--;
	if (this.length < 0) { this.length = 0; }
	return firstIn;
}

queueMethods.size = function() {
	return this.length;
}