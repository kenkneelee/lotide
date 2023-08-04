// Function that, given an object and callback, loops through the object's keys and returns first key that returns truthy value from callback. Returns undefined if no matches found.
// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  // Iterate through the input object's keys
  for (const key in object) {
    // When inputting the key into the callback and receiving a truthy return:
    if (callback(object[key])) {
      // Escape the function and return the first key that returns truthy
      return key;
    }
  }
  // Returns undefined if no matching key is found
};

module.exports = findKey;
// TEST CODE
// HELPER FUNCTIONS
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`🚀🚀🚀Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❗️❗️❗️Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CASES
// Test Case: Given in assignment, multiple matching keys
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);
// Test Case: No matching keys
assertEqual(
  findKey({ a: 1, b: 2, c: 3, d: 4 }, (x) => x === 5),
  undefined
);
// Test Case: Object with Number key values
assertEqual(
  findKey({ a: 3, b: 1, c: 4, d: 1, e: 5, f: 9 }, (x) => x > 8),
  "f"
);
// Test Case: Object with String key values
assertEqual(
  findKey(
    { Honda: "Civic", Toyota: "Corolla", Mazda: "3", Nissan: "Sentre" },
    (x) => x === "Corolla"
  ),
  "Toyota"
);
// Test Case: Object with Boolean key values
assertEqual(
  findKey(
    { a: true, b: true, c: true, d: false, e: true, f: false },
    (x) => !x
  ),
  "d"
);
