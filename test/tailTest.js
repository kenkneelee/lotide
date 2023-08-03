const assert = require("chai").assert;
const tail = require(`../tail`);

// TEST CODE
describe("#tail", () => {
  // Test Case 1: Array of numbers
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  // Test Case 2: Array of strings
  it("returns ['b', 'c', 'd'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(tail(["a", "b", "c", "d"]), ["b", "c", "d"]);
  });
  // Test Case 3: Array of mixed strings and numbers
  it("returns ['a', 4, 'b', 3] for [5, 'a', 4, 'b', 3]", () => {
    assert.deepEqual(tail([5, "a", 4, "b", 3]), ["a", 4, "b", 3]);
  });
  // Test Case 4: Array with a single element
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  // Test Case 5: Empty array
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  // // Test Case 6: Not an array
  it("returns undefined for non array input", () => {
    assert.strictEqual(tail("NotArray"), undefined);
  });
});
