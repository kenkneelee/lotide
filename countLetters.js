// Function that, given an input sentence, returns an object with key:value pairs corresponding to occurrences of each character
// FUNCTION IMPLEMENTATION
const countLetters = function(sentence) {
  // Declare empty array to populate with letter:count pairs
  let letters = {};
  // Loop through every character in input string
  for (const char of sentence) {
    // Skip spaces
    if (char !== " ") {
      // If letter has been previously counted, increment. Otherwise, declare new property at value: 1
      if (letters[char]) {
        letters[char]++;
      } else {
        letters[char] = 1;
      }
    }
  }
  return letters;
};

module.exports = countLetters;

