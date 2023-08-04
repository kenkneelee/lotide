// Function that returns an array of the middle value(s) of an input array
// FUNCTION IMPLEMENTATION
const middle = function(arr) {
  // Return empty array because there is no middle for 2 or fewer elements
  // Return array of either middle or middle two values depending on even/odd length
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    return [arr[Math.floor(arr.length / 2)]];
  } else if (arr.length % 2 === 0)
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};

module.exports = middle;