var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.length = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.length ++;
	this.storage[this.length - 1] = value;
}

stackMethods.pop = function() {
	if (this.length === 0) {
		return;
	}
	let lastIn = this.storage[this.length - 1];
	delete this.storage[this.length - 1];
	this.length--;
	return lastIn;
}

stackMethods.size = function() {
	return this.length;
}

