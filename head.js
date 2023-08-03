// FUNCTION IMPLEMENTATION
// Return the first element of input if it is an array
const head = function(array) {
  return Array.isArray(array) ? array[0] : undefined;
};

module.exports = head;