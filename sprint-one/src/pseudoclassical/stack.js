var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(value) {
	this.length ++;
	this.storage[this.length - 1] = value;
}

Stack.prototype.pop = function() {
	if (this.length === 0) {
		return;
	}
	let lastIn = this.storage[this.length - 1];
	delete this.storage[this.length - 1];
	this.length--;
	return lastIn;
}

Stack.prototype.size = function() {
	return this.length;
}



=======
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  for (var i = this.count - 1; i >= 0; i--) {
    this.storage[i + 1] = this.storage[i];
  }
  this.storage[0] = value;
  this.count++;
};

Stack.prototype.pop = function() {
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

Stack.prototype.size = function() {
  return this.count;
};
