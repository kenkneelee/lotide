const assertEqual = require(`../assertEqual`);
const assertArraysEqual = require(`../assertArraysEqual`);
const tail = require (`../tail`)

// TEST CODE
// Test Case 1: Array of numbers
assertArraysEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
// Test Case 2: Array of strings
assertArraysEqual(tail(["a", "b", "c", "d"]), ["b", "c", "d"]);
// Test Case 3: Array of mixed strings and numbers
assertArraysEqual(tail([5, "a", 4, "b", 3]), ["a", 4, "b", 3]);
// Test Case 4: Array with a single element
assertArraysEqual(tail([1]), []);
// Test Case 5: Empty array
assertArraysEqual(tail([]), []);
// Test Case 6: Not an array
assertEqual(tail("NotArray"), undefined);


// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
