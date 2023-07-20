// FUNCTION IMPLEMENTATION
// Test helper function
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`🚀🚀🚀Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❗️❗️❗️Assertion Failed: ${actual} !== ${expected}`);
};

// Function
const findKeyByValue = function (contentList, searchTerm) {
  // Iterate through all properties in input object
  for (key in contentList) {
    // If value of the property matches search term, return the name of the property
    if (contentList[key] === searchTerm) {
      return key;
    }
  }
};

// TEST CODE
// TV shows. keys and values are both strings
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
// Search term that exists in input list
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// Search term that does not exist in input list
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// Musicians. keys and values are both strings
const bestMusiciansByGenre = {
  punk: "Green Day",
  hiphop: "Kendrick Lamar",
  rock: "Queen",
};
// Search term that exists in input list
assertEqual(findKeyByValue(bestMusiciansByGenre, "Green Day"), "punk");
// Search term that exists in input list
assertEqual(findKeyByValue(bestMusiciansByGenre, "Queen"), "rock");
// Search term that does not exist in input list
assertEqual(findKeyByValue(bestMusiciansByGenre, "MGK"), undefined);

// Student grades. keys are strings, values are numbrs
const studentGrades = {
  Billy: 76,
  Bobby: 84,
  John: 73,
  Johnny: 88,
  Sarah: 90,
  Sally: 71,
  Annie: 76,
  Amy: 84,
};
// Search term that exists in input list multiple times
assertEqual(findKeyByValue(studentGrades, 84), "Bobby");
// Search term that exists in input list once
assertEqual(findKeyByValue(studentGrades, 73), "John");
// Search term that does not exist in input list
assertEqual(findKeyByValue(studentGrades, 99), undefined);
