// Helper function that returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = require("./eqObjects");

// Function that prints result of object equality comparison to console
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Import inspect function to get object information
  // Call eqObjects function to determine equality and print appropriate assertion
  const inspect = require("util").inspect;
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

module.exports = assertObjectsEqual;

