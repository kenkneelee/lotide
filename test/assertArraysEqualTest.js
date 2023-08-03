const assertArraysEqual = require(`../assertArraysEqual`);
// TEST CODE
// Equal arrays of numbers
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should PASS
// Empty arrays
assertArraysEqual([], []); // Should PASS
// Arrays with one element
assertArraysEqual([1], [1]); // Should PASS

// Arrays with same values but different types
assertArraysEqual([1, "2", 3], [1, 2, 3]); // Should FAIL
// Arrays with same values, one all strings, other all numbers
assertArraysEqual(["1", "2", "3"], [1, 2, 3]); // Should FAIL
