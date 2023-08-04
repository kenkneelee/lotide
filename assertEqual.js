// Function that prints result of equality comparison between two values to console
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // Print assertion if strict equality between actual and expected values
  actual === expected
    ? console.log(`🚀🚀🚀Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❗️❗️❗️Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
