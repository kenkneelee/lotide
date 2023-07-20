// FUNCTION IMPLEMENTATION
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  // use traditional for loop instead of for..of loop to access the index easily
  for (let i = 0; i < sentence.length; i++) {
    // Skip spaces
    if (sentence[i] !== " ") {
      // If letter has been previously counted, push new index. Otherwise, declare new property array with index
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// TEST CODE
// TEST HELPER FUNCTIONS
// Function to check whether two arrays are equal
const eqArrays = function (array1, array2) {
  let equalElements = 0;
  console.log(`⏳Checking array [${array1}] against array [${array2}]⏳`);

  // Check to make sure both inputs are arrays and have the same length
  if (
    !Array.isArray(array1) ||
    !Array.isArray(array2) ||
    array1.length !== array2.length
  ) {
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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Array Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌Array Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// Simple short string
const result0 = letterPositions("LHL");
assertArraysEqual(result0.L, [0, 2]);
assertArraysEqual(result0.H, [1]);

// Simple short string with repeated letters
const result1 = letterPositions("hello");
assertArraysEqual(result1.h, [0]);
assertArraysEqual(result1.e, [1]);
assertArraysEqual(result1.l, [2, 3]);
assertArraysEqual(result1.o, [4]);

// Longer string with repeated characters and spaces
const result2 = letterPositions("lighthouse in the house");
assertArraysEqual(result2.l, [0]);
assertArraysEqual(result2.i, [1, 11]);
assertArraysEqual(result2.g, [2]);
assertArraysEqual(result2.h, [3, 5, 15, 18]);
assertArraysEqual(result2.t, [4, 14]);
assertArraysEqual(result2.o, [6, 19]);
assertArraysEqual(result2.u, [7, 20]);
assertArraysEqual(result2.s, [8, 21]);
assertArraysEqual(result2.e, [9, 16, 22]);
assertArraysEqual(result2.n, [12]);

// String with no repeated characters but spaces
const result3 = letterPositions("The quick brown");
assertArraysEqual(result3.T, [0]);
assertArraysEqual(result3.h, [1]);
assertArraysEqual(result3.e, [2]);
assertArraysEqual(result3.q, [4]);
assertArraysEqual(result3.u, [5]);
assertArraysEqual(result3.i, [6]);
assertArraysEqual(result3.c, [7]);
assertArraysEqual(result3.k, [8]);
assertArraysEqual(result3.b, [10]);
assertArraysEqual(result3.r, [11]);
assertArraysEqual(result3.o, [12]);
assertArraysEqual(result3.w, [13]);
assertArraysEqual(result3.n, [14]);

// Upper and lowercase mix
const result4 = letterPositions("aAbBcCdDeEfF");
assertArraysEqual(result4.a, [0]);
assertArraysEqual(result4.A, [1]);
assertArraysEqual(result4.b, [2]);
assertArraysEqual(result4.B, [3]);
assertArraysEqual(result4.c, [4]);
assertArraysEqual(result4.C, [5]);
assertArraysEqual(result4.d, [6]);
assertArraysEqual(result4.D, [7]);
assertArraysEqual(result4.e, [8]);
assertArraysEqual(result4.E, [9]);
assertArraysEqual(result4.f, [10]);
assertArraysEqual(result4.F, [11]);
