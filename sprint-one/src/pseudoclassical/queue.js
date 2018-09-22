var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
	let index = this.length === 0? 0: Object.keys(this.storage).sort(function(a,b) { return b - a })[0];
    // debugger;
    this.length++;
    this.storage[index + 1] = value;
}

Queue.prototype.dequeue = function() {
	let index = Object.keys(this.storage).sort(function(a,b) { return a - b })[0];
	let firstIn = this.storage[index];
	delete this.storage[index];
	this.length--;
	if (this.length < 0) { this.length = 0; }
	return firstIn;
}

Queue.prototype.size = function() {
	return this.length;
}
=======
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.count - 1; i >= 0; i--) {
    this.storage[i + 1] = this.storage[i];
  }
  this.storage[0] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    var result = this.storage[this.count - 1];
    this.count--;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.count;
};
>>>>>>> origin/pair
