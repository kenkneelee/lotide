// FUNCTION IMPLEMENTATION
// Function to check whether two arrays are equal
const eqArrays = function (array1, array2) {
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
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      equalElements++;
    }
  }
  // Pass/fail dependent on if all elements are the same
  return (equalElements === array1.length && equalElements === array2.length); 
};

module.exports = eqArrays;
