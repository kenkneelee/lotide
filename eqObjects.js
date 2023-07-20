// FUNCTION IMPLEMENTATION
// Helper function for tests
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`🚀🚀🚀Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❗️❗️❗️Assertion Failed: ${actual} !== ${expected}`);
};

// Helper function to check whether two arrays are equal
const eqArrays = function(array1, array2) {
  // Check to make sure both inputs are arrays and have the same length
  if (
    Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.length === array2.length
  ) {
    // Iterate through both arrays, return false if any element pairs don't match
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    // If all pairs match after iterating, return true
    return true;
  }
  // Return false if either input isn't an array or if they have different lengths
  return false;
};

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

// TEST CODE

// Test case: All properties are strings
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

// Test case: One property is an array
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
); // => false

// Test case: All properties are arrays
const numberPairs = { a: [5, 10], b: [10, 5] };
const anotherNumberPairs = { b: [10, 5], a: [5, 10] };
assertEqual(eqObjects(numberPairs, anotherNumberPairs), true); // => true

const thirdNumberPairs = { a: [10, 5], b: [5, 10] };
assertEqual(eqObjects(numberPairs, thirdNumberPairs), false); // => false

// Test case: Mixed property types
const carObject = {
  make: "Honda",
  model: "Civic",
  doors: 2,
  seats: ["empty", "empty"],
  gas: true,
};
const anotherCarObject = {
  gas: true,
  doors: 2,
  seats: ["empty", "empty"],
  make: "Honda",
  model: "Civic",
};
assertEqual(eqObjects(carObject, anotherCarObject), true); // => true

const familyCarObject = {
  make: "Honda",
  model: "Civic",
  doors: 4,
  seats: ["empty", "empty", "carseat", "carseat"],
  gas: true,
};
assertEqual(eqObjects(carObject, familyCarObject), false); // => false
