// Function that returns all but the first element of an input array
// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return Array.isArray(array) ? array.slice(1) : undefined;
};

module.exports = tail;