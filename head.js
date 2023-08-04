// Function that returns the first element of an input array
// FUNCTION IMPLEMENTATION
// Return the first element of input if it is an array, undefined otherwise
const head = function(array) {
  return Array.isArray(array) ? array[0] : undefined;
};

module.exports = head;