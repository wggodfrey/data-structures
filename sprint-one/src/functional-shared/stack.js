var Stack = function() {
  var stack = {};
  stack.storage = {};
  stack.length = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    var result = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return result;
  }
};

stackMethods.size = function() {
  return this.length;
};


