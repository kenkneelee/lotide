// Import function to test
const letterPositions = require("../letterPositions");
// Import helper function for testing
const assert = require("chai").assert;

// TEST CODE
// Simple short string
const result0 = letterPositions("LHL");
describe("#letterPositions('LHL')", () => {
  it("returns for 'LHL'", () => {
    assert.deepEqual(result0, { L: [0, 2], H: [1] });
  });
});

// Simple short string with repeated letters
const result1 = letterPositions("hello");
describe("#letterPositions('hello')", () => {
  it("returns for 'hello'", () => {
    assert.deepEqual(result1, { h: [0], e: [1], l: [2, 3], o: [4] });
  });
});

// Longer string with repeated characters and spaces
const result2 = letterPositions("lighthouse in the house");
describe("#letterPositions('lighthouse in the house')", () => {
  it("returns for 'lighthouse in the house'", () => {
    assert.deepEqual(result2, {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12],
    });
  });
});

// String with no repeated characters but spaces
const result3 = letterPositions("The quick brown");
describe("#letterPositions('The quick brown')", () => {
  it("returns for 'The quick brown'", () => {
    assert.deepEqual(result3, {
      T: [0],
      h: [1],
      e: [2],
      q: [4],
      u: [5],
      i: [6],
      c: [7],
      k: [8],
      b: [10],
      r: [11],
      o: [12],
      w: [13],
      n: [14],
    });
  });
});
// Upper and lowercase mix
const result4 = letterPositions("aAbBcCdDeEfF");
describe("#letterPositions('aAbBcCdDeEfF')", () => {
  it("returns for 'aAbBcCdDeEfF'", () => {
    assert.deepEqual(result4, {
      a: [0],
      A: [1],
      b: [2],
      B: [3],
      c: [4],
      C: [5],
      d: [6],
      D: [7],
      e: [8],
      E: [9],
      f: [10],
      F: [11],
    });
  });
});
