// Function that returns all but the first element of an input array
// FUNCTION IMPLEMENTATION
const tail = function(array) {
  // Use built-in Array.slice() function to return new array starting from index 1
  return Array.isArray(array) ? array.slice(1) : undefined;
};

module.exports = tail;