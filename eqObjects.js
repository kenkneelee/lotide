// Function to return truthy/falsy result of object equality comparison
// FUNCTION IMPLEMENTATION
// Helper function to check whether two arrays are equal
const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Check if objects have the same number of properties
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // Iterate through each property to check if they're equal
    for (const key in object1) {
      // If property value is an array, call eqArrays to compare them
      // (This functionality is already in eqArrays but included per assignment instructions)
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // Escape function with return false if any array properties don't match
        // (If this doesn't trigger because the arrays are the same, move on and check the next property)
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        // If property value is a primitive, use simple equals to check
        // Escape function with return false if any primitive properties don't match
        // (If this doesn't trigger because the properties match, move on to check the next property)
        return false;
      }
    }
    // Return true if no tests failed after iterating through all properties. Objects are the same.
    return true;
  }
  // Return false if objects have different number of properties
  return false;
};

module.exports = eqObjects;

