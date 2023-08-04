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

// Helper function that returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
// Function that prints result of object equality comparison to console
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(
      `✅Object Assertion Passed: [${inspect(actual)}] === [${inspect(
        expected
      )}]`
    );
  } else {
    console.log(
      `❌Object Assertion Failed: [${inspect(actual)}] !== [${inspect(
        expected
      )}]`
    );
  }
};

assertObjectsEqual({ a: "asd", b: 5 }, { b: 5, a: "asd" }); // Should pass
assertObjectsEqual({ a: "asdfas", b: 10 }, { b: 5, a: "asd" }); // Should fail
