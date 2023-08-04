// Function that returns truthy/falsy result of equality comparison between two input arrays
// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  // Initialize variable to store number of equal elements
  let equalElements = 0;
  // Check to make sure both inputs are arrays and have the same length
  if (
    !Array.isArray(array1) ||
    !Array.isArray(array2) ||
    array1.length !== array2.length
  ) {
    return false;
  }
  // Iterate through both arrays, checking each element for equality
  // Increment equalElements if elements are strictly equal
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      equalElements++;
    }
  }
  // Return pass/fail dependent on if all elements are the same (# of equalElements === # of elements in both arrays)
  return equalElements === array1.length && equalElements === array2.length;
};

module.exports = eqArrays;
