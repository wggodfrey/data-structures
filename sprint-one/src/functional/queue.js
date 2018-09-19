var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
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
  };

  return someInstance;
};
