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
