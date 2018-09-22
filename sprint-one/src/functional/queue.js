var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
<<<<<<< HEAD
    let index = Object.keys(storage).sort(function(a,b) { return b - a })[0]
    storage[index + 1] = value;
  };

  someInstance.dequeue = function() {
    let index = Object.keys(storage).sort(function(a,b) { return a - b })[0]
    let firstIn = storage[index];
    delete storage[index];
    return firstIn;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
=======
    for (var i = size - 1; i >= 0; i--) {
      storage[i+1] = storage[i];
    }
    storage[0] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var result = storage[size-1];
      size--;
      return result;
    }
  };

  someInstance.size = function() {
    return size;
>>>>>>> origin/pair
  };

  return someInstance;
};
