const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`🚀🚀🚀Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❗️❗️❗️Assertion Failed: ${actual} !== ${expected}`);
};

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

// TEST CODE
// String with no repeated characters
const result0 = countLetters("The quick brown");
assertEqual(result0["T"], 1);
assertEqual(result0["h"], 1);
assertEqual(result0["e"], 1);
assertEqual(result0["q"], 1);
assertEqual(result0["u"], 1);
assertEqual(result0["i"], 1);
assertEqual(result0["c"], 1);
assertEqual(result0["k"], 1);
assertEqual(result0["b"], 1);
assertEqual(result0["r"], 1);
assertEqual(result0["o"], 1);
assertEqual(result0["w"], 1);
assertEqual(result0["n"], 1);

// Repeated letters
const result1 = countLetters("LHL");
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);

// Multiple repeated letters and spaces
const result2 = countLetters("lighthouse in the house");
assertEqual(result2["l"], 1);
assertEqual(result2["i"], 2);
assertEqual(result2["g"], 1);
assertEqual(result2["h"], 4);
assertEqual(result2["t"], 2);
assertEqual(result2["o"], 2);
assertEqual(result2["u"], 2);
assertEqual(result2["s"], 2);
assertEqual(result2["e"], 3);
assertEqual(result2["n"], 1);

// Upper and lowercase
const result3 = countLetters("aAbBcCdDeEfF");
assertEqual(result3["a"], 1);
assertEqual(result3["A"], 1);
assertEqual(result3["b"], 1);
assertEqual(result3["B"], 1);
assertEqual(result3["c"], 1);
assertEqual(result3["C"], 1);
assertEqual(result3["d"], 1);
assertEqual(result3["D"], 1);
assertEqual(result3["e"], 1);
assertEqual(result3["E"], 1);
assertEqual(result3["f"], 1);
assertEqual(result3["F"], 1);
