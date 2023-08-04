// Import function to test
const assertObjectsEqual = require("../assertObjectsEqual");

// Test Case 1: Objects with swapped key order
assertObjectsEqual({ a: "asd", b: 5 }, { b: 5, a: "asd" }); // Should pass
// Test Case 2: Objects with mixed property data types
assertObjectsEqual({ a: "hello", b: [1, 2, 3] }, { b: [1, 2, 3], a: "hello" }); // Should pass
// Test Case 3: Empty objects
assertObjectsEqual({}, {}); // Should pass
// Test Case 4: Objects with multiple mixed data type properties
assertObjectsEqual({ 5: "a", a: 5, c: true }, { a: 5, 5: "a", c: true }); // Should pass

// Test Case 5: Objects with different property values
assertObjectsEqual({ a: "asdfas", b: 10 }, { b: 5, a: "asd" }); // Should fail
// Test Case 6: Objects with different array values
assertObjectsEqual({ 1: [1, 2, 3, 4, 5], 2: 2 }, { 2: 2, 1: [5, 4, 3, 2, 1] }); // Should fail
// Test Case 7: Objects with one empty
assertObjectsEqual({}, { a: "something" }); // Should fail
