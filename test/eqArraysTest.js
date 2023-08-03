const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);

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
