// Function that, given an array and callback, perform the callback function on every element in the array
// FUNCTION IMPLEMENTATION
const map = function(array, callback) {
  // Declare empty results array
  const results = [];
  // Iterate through array and call callback function on each item, push result to results array
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
