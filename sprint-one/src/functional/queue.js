var Queue = function() {
  var queue = {};
  var storage = {};
  var head = 0;
  var tail = 0;

  queue.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  queue.dequeue = function() {
    if (tail - head > 0) {
      var result = storage[head];
      delete storage[head];
      head++;
      return result;
    }
  };

  queue.size = function() {
    return tail - head;
  };

  return queue;
};
