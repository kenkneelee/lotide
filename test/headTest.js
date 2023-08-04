// Import function to test
const head = require("../head");
// Import helper function for testing
const assert = require("chai").assert;

// TEST CODE
describe("#head", () => {
  // Test Case 1: array of numbers
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  // Test Case 2: array of numbers
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  // Test Case 3: array of single string
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  // Test Case 4: array of single number
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });
  // Test Case 5: array of strings
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  // Test Case 6: array of strings
  it("returns 'boot' for ['boot', 'camp']", () => {
    assert.strictEqual(head(["boot", "camp"]), "boot");
  });
  // Test Case 7: array of mixed strings and numbers
  it("returns '1' for ['1', 2, 3]", () => {
    assert.strictEqual(head(["1", 2, 3]), "1");
  });
  // Test Case 8: empty array
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  // Test Case 9: no input
  it("returns undefined for no input", () => {
    assert.strictEqual(head(), undefined);
  });
});
