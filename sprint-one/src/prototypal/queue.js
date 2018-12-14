var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.head = 0;
  queue.tail = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
};

queueMethods.size = function() {
  return this.tail - this.head;
};