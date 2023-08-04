// Function to print result of array equality comparison to console
// FUNCTION IMPLEMENTATION
// Import array comparison helper function
const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(array1, array2) {
  // Call array comparison function, print assertion dependent on truthy/falsy result
  if (eqArrays(array1, array2)) {
    console.log(`✅Array Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌Array Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

module.exports = assertArraysEqual;
