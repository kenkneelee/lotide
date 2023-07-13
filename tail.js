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

// Return a new array of all elements except the first
const tail = function(array) {
  if (Array.isArray(array)) {
    return array.slice(1);
  }
};

// Function to check whether two arrays are equal
const arrayEqual = function(array1, array2) {
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
// Test Case 1: Array of numbers
arrayEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
// Test Case 2: Array of strings
arrayEqual(tail(["a", "b", "c", "d"]), ["b", "c", "d"]);
// Test Case 3: Array of mixed strings and numbers
arrayEqual(tail([5, "a", 4, "b", 3]), ["a", 4, "b", 3]);
// Test Case 4: Array with a single element
arrayEqual(tail([1]), []);
// Test Case 5: Empty array
arrayEqual(tail([]), []);
// Test Case 6: Not an array
arrayEqual(tail("NotArray"), undefined);


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
