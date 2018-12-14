var Stack = function() {
  var stack = {};
  var storage = {};
  var length = 0;

  stack.push = function(value) {
    storage[length] = value;
    length++;
  };

  stack.pop = function() {
    if (length > 0) {
      var result = storage[length - 1];
      delete storage[length - 1];
      length--;
      return result;
    }
  };

  stack.size = function() {
    return length;
  };

  return stack;
};
