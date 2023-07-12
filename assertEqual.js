// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`🚀🚀🚀Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❗️❗️❗️Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("1", 1);
assertEqual("42", "Fourty two");
assertEqual("true", true);
assertEqual("Lighthouse", "lighthouse");
assertEqual("Lighthouse", "Lighthouse");
