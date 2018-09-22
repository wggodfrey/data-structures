var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  _.extend(someInstance,stackMethods);

  return someInstance;
=======
  var stack = {};
  stack.storage = {};
  stack.count = 0;
  _.extend(stack, stackMethods);
  return stack;
>>>>>>> origin/pair
};

stackMethods = {};

stackMethods.push = function(value) {
	this.length ++;
	this.storage[this.length - 1] = value;
}

<<<<<<< HEAD
stackMethods.pop = function() {
	if (this.length === 0) {
		return;
	}
	let lastIn = this.storage[this.length - 1];
	delete this.storage[this.length - 1];
	this.length--;
	return lastIn;
}
=======
stackMethods.push = function(value) {
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

stackMethods.size = function() {
  return this.count;
};

>>>>>>> origin/pair

stackMethods.size = function() {
	return this.length;
}
