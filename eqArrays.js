// FUNCTION IMPLEMENTATION
// Check if two inputs are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚀🚀🚀Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❗️❗️❗️Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

// Function to check whether two arrays are equal
const eqArrays = function(array1, array2) {
  let equalElements = 0;
  console.log(
    `Checking output [${array1}] against expected output [${array2}]`
  );

  // Check to make sure both inputs are arrays and have the same length
  if (
    !Array.isArray(array1) ||
    !Array.isArray(array2) ||
    array1.length !== array2.length
  ) {
    console.log("Invalid input(s)");
    return false;
  }

  // Iterate through both arrays, calling assertEqual on each element
  for (let i = 0; i < array1.length; i++) {
    if (assertEqual(array1[i], array2[i])) {
      equalElements++;
    }
  }

  // Pass/fail assertion dependent on if all elements are the same
  if (equalElements === array1.length && equalElements === array2.length) {
    console.log(`✅Array Assertion Passed: [${array1}] === [${array2}]`);
    return true;
  } else {
    console.log(`❌Array Assertion Failed: [${array1}] !== [${array2}]`);
    return false;
  }
};

// TEST CODE
// Equal arrays of numbers
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// Arrays with same values but different types
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), false); // => should PASS
// Arrays with same values, one all strings, other all numbers
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false); // => should PASS
// Empty arrays
assertEqual(eqArrays([], []), true); // => should PASS
// Arrays with one element
assertEqual(eqArrays([1], [1]), true); // => should PASS
