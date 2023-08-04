// Import function to test
const assertArraysEqual = require(`../assertArraysEqual`);
// TEST CODE
// Test case 1:Equal arrays of numbers
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should PASS
// Test case 2:Empty arrays
assertArraysEqual([], []); // Should PASS
// Test case 3:Arrays with one element
assertArraysEqual([1], [1]); // Should PASS

// Test case 4:Arrays with same values but different types
assertArraysEqual([1, "2", 3], [1, 2, 3]); // Should FAIL
// Test case 5:Arrays with same values, one all strings, other all numbers
assertArraysEqual(["1", "2", "3"], [1, 2, 3]); // Should FAIL
