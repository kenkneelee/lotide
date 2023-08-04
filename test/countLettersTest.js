// Import function to test
const countLetters = require("../countLetters");
// Import helper function for testing
const assert = require("chai").assert;

// TEST CODE
describe("#countLetters", () => {
  // String with no repeated characters
  const result0 = countLetters("The quick brown");
  it("returns large object for 'The quick brown'", () => {
    assert.deepEqual(result0, {
      T: 1,
      h: 1,
      e: 1,
      q: 1,
      u: 1,
      i: 1,
      c: 1,
      k: 1,
      b: 1,
      r: 1,
      o: 1,
      w: 1,
      n: 1,
    });
  });

  // Repeated letters
  const result1 = countLetters("LHL");
  it("returns { L: 2, H: 1 } for 'LHL'", () => {
    assert.deepEqual(result1, { L: 2, H: 1 });
  });

  // Multiple repeated letters and spaces
  const result2 = countLetters("lighthouse in the house");
  it("returns large object for 'lighthouse in the house'", () => {
    assert.deepEqual(result2, {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });

  // Upper and lowercase
  const result3 = countLetters("aAbBcCdDeEfF");
  it("returns large object for 'aAbBcCdDeEfF'", () => {
    assert.deepEqual(result3, {
      a: 1,
      A: 1,
      b: 1,
      B: 1,
      c: 1,
      C: 1,
      d: 1,
      D: 1,
      e: 1,
      E: 1,
      f: 1,
      F: 1,
    });
  });
});
