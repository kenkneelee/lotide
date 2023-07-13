// FUNCTION IMPLEMENTATION
// Function to check whether two arrays are equal
const eqArrays = function(array1, array2) {
  let equalElements = 0;
  console.log(`⏳Checking array [${array1}] against array [${array2}]⏳`);

  // Check to make sure both inputs are arrays and have the same length
  if (
    !Array.isArray(array1) ||
    !Array.isArray(array2) ||
    array1.length !== array2.length
  ) {
    console.log("Invalid input(s)");
    return false;
  }

  // Iterate through both arrays, checking for strict equality on each element
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      equalElements++;
    }
  }

  // Pass/fail dependent on if all elements are the same
  if (equalElements === array1.length && equalElements === array2.length) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Array Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌Array Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// TEST CODE
// Equal arrays of numbers
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should PASS
// Arrays with same values but different types
assertArraysEqual([1, "2", 3], [1, 2, 3]); // Should FAIL
// Arrays with same values, one all strings, other all numbers
assertArraysEqual(["1", "2", "3"], [1, 2, 3]); // Should FAIL
// Empty arrays
assertArraysEqual([], []); // Should PASS
// Arrays with one element
assertArraysEqual([1], [1]); // Should PASS
