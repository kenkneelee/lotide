// Import function to test
const findKeyByValue = require("../findKeyByValue");
// Import helper function for testing
const assert = require("chai").assert;

// TEST CODE
// Case 1: TV shows. keys and values are both strings
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

// Case 2: Musicians. keys and values are both strings
const bestMusiciansByGenre = {
  punk: "Green Day",
  hiphop: "Kendrick Lamar",
  rock: "Queen",
};

// Case 3: Student grades. keys are strings, values are numbers
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

describe("#findKeyByValue", () => {
  // Case 1: TV shows. keys and values are both strings
  // Search term that exists in input list
  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  // Search term that does not exist in input list
  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });

  // Case 2: Musicians. keys and values are both strings
  // Search term that exists in input list
  it("returns 'punk' for 'Green Day'", () => {
    assert.strictEqual(
      findKeyByValue(bestMusiciansByGenre, "Green Day"),
      "punk"
    );
  });
  // Search term that exists in input list
  it("returns 'rock' for 'Queen'", () => {
    assert.strictEqual(findKeyByValue(bestMusiciansByGenre, "Queen"), "rock");
  });
  // Search term that does not exist in input list
  it("returns undefined for 'MGK'", () => {
    assert.strictEqual(findKeyByValue(bestMusiciansByGenre, "MGK"), undefined);
  });

  // Case 3: Student grades. keys are strings, values are numbers
  // Search term that exists in input list multiple times
  it("returns 'Bobby' for 84", () => {
    assert.strictEqual(findKeyByValue(studentGrades, 84), "Bobby");
  });
  // Search term that exists in input list once
  it("returns 'John' for 73", () => {
    assert.strictEqual(findKeyByValue(studentGrades, 73), "John");
  });
  // Search term that does not exist in input list
  it("returns undefined for 99", () => {
    assert.strictEqual(findKeyByValue(studentGrades, 99), undefined);
  });
});
