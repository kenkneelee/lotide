// Function that, given a sentence, returns an object with key:value pairs corresponding to characters:the positions of each occurrence of the character.
// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // use traditional for loop instead of for..of loop to access the index easily
  for (let i = 0; i < sentence.length; i++) {
    // Skip spaces
    if (sentence[i] !== " ") {
      // If letter has been previously counted, push new index. Otherwise, declare new property array with index
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
module.exports = letterPositions;
