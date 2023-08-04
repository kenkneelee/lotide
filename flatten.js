// Function that given nested array, flattens inside arrays and moves them one level up
// FUNCTION IMPLEMENTATION
const flatten = function (nestedArray) {
  let finalArray = [];
  for (let elem of nestedArray) {
    if (Array.isArray(elem)) {
      // if element is an array, recursively flatten it and reassign to finalArray
      finalArray = finalArray.concat(flatten(elem));
    } else {
      finalArray.push(elem);
    }
  }
  return finalArray;
};
module.exports = flatten;
