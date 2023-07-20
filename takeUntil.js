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

// TEST CODE
// HELPER FUNCTIONS
// Helper function to check whether two arrays are equal
const eqArrays = function(array1, array2) {
  if (
    Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.length === array2.length
  ) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// Assertion to log whether arrays are equal
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Array Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌Array Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// TEST CASES
// Test Case: Numbers with number condition callback
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log("---");
// Test Case: Strings with string condition callback
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
console.log("---");

// Test Case: Empty array
const data3 = [];
const results3 = takeUntil(data3, (x) => x > 0);
console.log(results3);
assertArraysEqual(results3, []);
console.log("---");

// Test Case: No elements meet condition
const data4 = [213, 564, 432, 43, 123, 54];
const results4 = takeUntil(data4, (x) => x < 0);
console.log(results4);
assertArraysEqual(results4, [213, 564, 432, 43, 123, 54]);
console.log("---");

// Test Case: All elements meet condition
const data5 = [" ", " ", " ", " "];
const results5 = takeUntil(data5, (x) => x === " ");
console.log(results5);
assertArraysEqual(results5, []);
console.log("---");
