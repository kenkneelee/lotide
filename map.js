const words = ["ground", "control", "to", "major", "tom"];
// Function that, given an array and callback, perform the callback function on every element in the array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, (word) => word[0]);
module.exports = map;
