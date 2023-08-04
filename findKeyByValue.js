// FUNCTION IMPLEMENTATION
// Function that, given an object to search and a property value, returns the name of the first property whose value matches search term
const findKeyByValue = function(contentList, searchTerm) {
  // Iterate through all properties in input object
  for (const key in contentList) {
    // If value of the property matches search term, return the name of the property and exit the function
    if (contentList[key] === searchTerm) {
      return key;
    }
  }
};
module.exports = findKeyByValue;
