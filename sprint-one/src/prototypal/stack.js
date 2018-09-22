var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.length = 0;

  return someInstance;
=======
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.count = 0;
  return stack;
>>>>>>> origin/pair
};

var stackMethods = {};

stackMethods.push = function(value) {
<<<<<<< HEAD
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
=======
  for (var i = this.count - 1; i >= 0; i--) {
    this.storage[i + 1] = this.storage[i];
  }
  this.storage[0] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var result = this.storage[0];
    for (var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.count--;
    return result;
  }
};
>>>>>>> origin/pair

stackMethods.size = function() {
  return this.count;
};
