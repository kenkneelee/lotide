// Function that given nested array, flattens inside arrays and moves them one level up
// FUNCTION IMPLEMENTATION
const flatten = function(nestedArray) {
  let finalArray = [];
  for (let elem of nestedArray) {
    if (Array.isArray(elem)) {
      for (let nestedElem of elem) {
        finalArray.push(nestedElem);
      }
    } else {
      finalArray.push(elem);
    }
  }
  return finalArray;
};
module.exports = flatten;
