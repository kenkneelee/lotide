const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`🚀🚀🚀Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❗️❗️❗️Assertion Failed: ${actual} !== ${expected}`);
};

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

// TEST CODE
// String with no repeated characters
const result3 = countLetters("The quick brown");
assertEqual(result3["T"], 1);
assertEqual(result3["h"], 1);
assertEqual(result3["e"], 1);
assertEqual(result3["q"], 1);
assertEqual(result3["u"], 1);
assertEqual(result3["i"], 1);
assertEqual(result3["c"], 1);
assertEqual(result3["k"], 1);
assertEqual(result3["b"], 1);
assertEqual(result3["r"], 1);
assertEqual(result3["o"], 1);
assertEqual(result3["w"], 1);
assertEqual(result3["n"], 1);

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
const result4 = countLetters("aAbBcCdDeEfF");
assertEqual(result4["a"], 1);
assertEqual(result4["A"], 1);
assertEqual(result4["b"], 1);
assertEqual(result4["B"], 1);
assertEqual(result4["c"], 1);
assertEqual(result4["C"], 1);
assertEqual(result4["d"], 1);
assertEqual(result4["D"], 1);
assertEqual(result4["e"], 1);
assertEqual(result4["E"], 1);
assertEqual(result4["f"], 1);
assertEqual(result4["F"], 1);
