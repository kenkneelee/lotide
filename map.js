const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);

// TEST CODE
// HELPER FUNCTIONS
// Helper function to check whether two arrays are equal
const eqArrays = function(array1, array2) {
  if (
    Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.length === array2.length
  ) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// Assertion to log whether arrays are equal
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Array Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌Array Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// TEST CASES
// Test Case: Character party health points
const partyHealthPoints = [100, 85, 10, 100, 100];
// Every party member takes 5 damage
assertArraysEqual(
  map(partyHealthPoints, (hp) => hp - 5),
  [95, 80, 5, 95, 95]
);
// Every party member is instantly dropped to 0 hp
// Since value modified doesn't depend on original, can use bracket instead of hp
assertArraysEqual(
  map(partyHealthPoints, () => 0),
  [0, 0, 0, 0, 0]
);

// Test Case: Add titles to names
const students = ["Billy", "Joe", "Johnson"];
// Add to ending of string
assertArraysEqual(
  map(students, (student) => `${student} the Coding Master`),
  [
    "Billy the Coding Master",
    "Joe the Coding Master",
    "Johnson the Coding Master",
  ]
);
// Add to both sides of string
assertArraysEqual(
  map(students, (student) => `Sir/Madam ${student} the Coding Master`),
  [
    "Sir/Madam Billy the Coding Master",
    "Sir/Madam Joe the Coding Master",
    "Sir/Madam Johnson the Coding Master",
  ]
);

// Test Case: Flip boolean values
const switches = [true, true, false, true, false, false, false];
assertArraysEqual(
  map(switches, (thisSwitch) => !thisSwitch),
  [false, false, true, false, true, true, true]
);
