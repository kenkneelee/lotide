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

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    return [arr[Math.floor(arr.length / 2)]];
  } else if (arr.length % 2 === 0)
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};

// Between 0 and 2 elements in array
assertArraysEqual(middle([]),[]); // => []
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

// Odd array length
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// Even array length
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

