// FUNCTION IMPLEMENTATION
// Function to check whether two arrays are equal
const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Array Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌Array Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

module.exports = assertArraysEqual;