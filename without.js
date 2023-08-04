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

// Function that, given a source array and itemsToRemove array, removes all instances of every item in itemsToRemove from source and returns filtered array.
const without = function(source, itemsToRemove) {
  return source.filter((elem) => !itemsToRemove.includes(elem));
};

// TEST CODE
// Test Case: Arrays of numbers
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// Test Case: Arrays of mixed data types
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// Test Case: Arrays of strings
assertArraysEqual(
  without(
    ["Lighthouse", "Labs", "Web", "Development", "Flex", "Bootcamp"],
    ["Labs", "Development"]
  ),
  ["Lighthouse", "Web", "Flex", "Bootcamp"]
);
// Test Case: Multiple same-value booleans
assertArraysEqual(without([true, true, true, false, false], [false]), [
  true,
  true,
  true,
]);
// Test Case: Multiple same-value numbers
assertArraysEqual(without([1, 1, 2, 3, 5, 8], [1]), [2, 3, 5, 8]);
// Test Case: Empty arrays
assertArraysEqual(without([], []), []);
// Test Case: No items to remove
assertArraysEqual(without(["a", "b", "c"], []), ["a", "b", "c"]);
// Test Case: Remove all items
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);

// Test Case: Make sure original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
