// FUNCTION IMPLEMENTATION
// Function to check whether two arrays are equal
const eqArrays = function(array1, array2) {
  let equalElements = 0;

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
  console.log(`⏳Checking array [${array1}] against array [${array2}]⏳`);
  if (eqArrays(array1, array2)) {
    console.log(`✅Array Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌Array Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// Function that given nested array, flattens inside arrays and moves them one level up
const flatten = function(nestedArray) {
  let finalArray = [];
  for (let elem of nestedArray) {
    if (Array.isArray(elem)) {
      for (let nestedElem of elem) {
        finalArray.push(nestedElem);
      }
    } else {
      finalArray.push(elem);
    }
  }
  return finalArray;
};

// TEST CODE
// Test Case: Array of arrays
assertArraysEqual(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);

// Test Case: Mixed arrays and numbers
assertArraysEqual(
  flatten([[1, 2, 3, 4], [5, 6], 7, 8, 9]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);

// Test Case: Mixed arrays of strings and numbers
assertArraysEqual(flatten([1, "a", 5, ["a", "b", "c"], 42, "aaaa"]), [
  1,
  "a",
  5,
  "a",
  "b",
  "c",
  42,
  "aaaa",
]);

// Test Case: Empty array
assertArraysEqual(flatten([]), []);

// Test Case: Empty nested array
assertArraysEqual(flatten([[], 1, 2, 3, 4, [], 5]), [1, 2, 3, 4, 5]);

// Test Case: Given in activity
assertArraysEqual(
  flatten([1, 2, [3, 4], 5, [6]]),
  [1, 2, 3, 4, 5, 6] // => [1, 2, 3, 4, 5, 6]
);
