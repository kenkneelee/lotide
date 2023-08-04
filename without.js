// Function that, given a source array and itemsToRemove array, removes all instances of every item in itemsToRemove from source and returns filtered array.
// FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  // Use built in Array.filter() with an !includes() callback to return desired array
  return source.filter((elem) => !itemsToRemove.includes(elem));
};
module.exports = without;
