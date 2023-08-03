// FUNCTION IMPLEMENTATION
// Return a new array of all elements except the first
const tail = function(array) {
  return Array.isArray(array) ? array.slice(1) : undefined;
};

module.exports = tail;