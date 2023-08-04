// Import function to test
const eqArrays = require(`../eqArrays`);
// Import test helper function
const assert = require("chai").assert;

// TEST CODE
describe("#eqArrays", () => {
  // Equal arrays of numbers
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  // Arrays with same values but different types
  it("returns false for [1, '2', 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, "2", 3], [1, 2, 3]), false);
  });
  // Arrays with same values, one all strings, other all numbers
  it("returns false for ['1', '2', '3'], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
  });
  // Empty arrays
  it("returns true for [], []", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  // Arrays with one element
  it("returns true for [1], [1]", () => {
    assert.strictEqual(eqArrays([1], [1]), true);
  });
});
assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assert.strictEqual(eqArrays([1, "2", 3], [1, 2, 3]), false);
assert.strictEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
assert.strictEqual(eqArrays([], []), true);
assert.strictEqual(eqArrays([1], [1]), true);
