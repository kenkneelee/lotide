// Function that, given an array and callback, returns new array with all original values until the first value that fulfills callback
// FUNCTION IMPLEMENTATION
const takeUntil = function(array, callback) {
  // Declare empty output array
  let output = [];
  // Iterate through input array
  for (const value of array) {
    // Check if callback is fulfilled, if so escape the function by returning the output to this point
    // Otherwise continue
    if (callback(value)) {
      return output;
    }
    // Push the current value to the output if callback still falsy
    output.push(value);
  }
  // Return output after the loop if escape condition hasn't been met
  return output;
};
module.exports = takeUntil;