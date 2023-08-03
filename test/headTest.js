const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  // array of numbers
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  // array of numbers
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  // array of single string
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  // array of single number
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });
  // array of strings
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  // array of strings
  it("returns 'boot' for ['boot', 'camp']", () => {
    assert.strictEqual(head(["boot", "camp"]), "boot");
  });
  // array of mixed strings and numbers
  it("returns '1' for ['1', 2, 3]", () => {
    assert.strictEqual(head(["1", 2, 3]), "1");
  });
  // empty array
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  // no input
  it("returns undefined for no input", () => {
    assert.strictEqual(head(), undefined);
  });
});
