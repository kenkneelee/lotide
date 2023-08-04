// FUNCTION IMPLEMENTATION
// Function that, given an array (allItems) to search and object itemsToCount {key:boolean}, return an object with key:value pairs corresponding to search:occurrences
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // Declare empty object to store matches
  const results = {};
  // Iterate through each item
  for (const item of allItems) {
    // If the property exists, increment. Otherwise, initialize at 1
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
