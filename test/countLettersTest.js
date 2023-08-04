// Import function to test
const countLetters = require("../countLetters");
// Import helper function for testing
const assert = require("chai").assert;

// TEST CODE
// String with no repeated characters
const result0 = countLetters("The quick brown");
describe("#countLetters('The quick brown')", () => {
  it("returns 1 for ['T']", () => {
    assert.strictEqual(result0["T"], 1);
  });
  it("returns 1 for ['h']", () => {
    assert.strictEqual(result0["h"], 1);
  });
  it("returns 1 for ['e']", () => {
    assert.strictEqual(result0["e"], 1);
  });
  it("returns 1 for ['q']", () => {
    assert.strictEqual(result0["q"], 1);
  });
  it("returns 1 for ['u']", () => {
    assert.strictEqual(result0["u"], 1);
  });
  it("returns 1 for ['i']", () => {
    assert.strictEqual(result0["i"], 1);
  });
  it("returns 1 for ['c']", () => {
    assert.strictEqual(result0["c"], 1);
  });
  it("returns 1 for ['k']", () => {
    assert.strictEqual(result0["k"], 1);
  });
  it("returns 1 for ['b']", () => {
    assert.strictEqual(result0["b"], 1);
  });
  it("returns 1 for ['r']", () => {
    assert.strictEqual(result0["r"], 1);
  });
  it("returns 1 for ['o']", () => {
    assert.strictEqual(result0["o"], 1);
  });
  it("returns 1 for ['w']", () => {
    assert.strictEqual(result0["w"], 1);
  });
  it("returns 1 for ['n']", () => {
    assert.strictEqual(result0["n"], 1);
  });
});

// Repeated letters
const result1 = countLetters("LHL");
describe("#countLetters('LHL')", () => {
  it("returns 2 for ['L']", () => {
    assert.strictEqual(result1["L"], 2);
  });
  it("returns 1 for ['H']", () => {
    assert.strictEqual(result1["H"], 1);
  });
});

// Multiple repeated letters and spaces
const result2 = countLetters("lighthouse in the house");
describe("#countLetters('Lighthouse in the house')", () => {
  it("returns 1 for ['l']", () => {
    assert.strictEqual(result2["l"], 1);
  });
  it("returns 2 for ['i']", () => {
    assert.strictEqual(result2["i"], 2);
  });
  it("returns 1 for ['g']", () => {
    assert.strictEqual(result2["g"], 1);
  });
  it("returns 4 for ['h']", () => {
    assert.strictEqual(result2["h"], 4);
  });
  it("returns 2 for ['t']", () => {
    assert.strictEqual(result2["t"], 2);
  });
  it("returns 2 for ['o']", () => {
    assert.strictEqual(result2["o"], 2);
  });
  it("returns 2 for ['u']", () => {
    assert.strictEqual(result2["u"], 2);
  });
  it("returns 2 for ['s']", () => {
    assert.strictEqual(result2["s"], 2);
  });
  it("returns 3 for ['e']", () => {
    assert.strictEqual(result2["e"], 3);
  });
  it("returns 1 for ['n']", () => {
    assert.strictEqual(result2["n"], 1);
  });
});

// Upper and lowercase
const result3 = countLetters("aAbBcCdDeEfF");
describe("#countLetters('aAbBcCdDeEfF')", () => {
  it("returns 1 for a", () => {
    assert.strictEqual(result3["a"], 1);
  });
  it("returns 1 for A", () => {
    assert.strictEqual(result3["A"], 1);
  });
  it("returns 1 for b", () => {
    assert.strictEqual(result3["b"], 1);
  });
  it("returns 1 for B", () => {
    assert.strictEqual(result3["B"], 1);
  });
  it("returns 1 for c", () => {
    assert.strictEqual(result3["c"], 1);
  });
  it("returns 1 for C", () => {
    assert.strictEqual(result3["C"], 1);
  });
  it("returns 1 for d", () => {
    assert.strictEqual(result3["d"], 1);
  });
  it("returns 1 for D", () => {
    assert.strictEqual(result3["D"], 1);
  });
  it("returns 1 for e", () => {
    assert.strictEqual(result3["e"], 1);
  });
  it("returns 1 for E", () => {
    assert.strictEqual(result3["E"], 1);
  });
  it("returns 1 for f", () => {
    assert.strictEqual(result3["f"], 1);
  });
  it("returns 1 for F", () => {
    assert.strictEqual(result3["F"], 1);
  });
});
