var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.length = 0;
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.size() > 0) {
    var result = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return result;
  }
};

stackMethods.size = function() {
  return this.length;
};
