// Import function to test
const without = require("../without");
// Function to check whether two arrays are equal
const assert = require("chai").assert;

// TEST CODE
describe("#without", () => {
  // Test Case 1: Arrays of numbers
  it("returns [2,3] for [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  // Test Case 2: Arrays of mixed data types
  it("returns ['1','2'] for ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  // Test Case 3: Arrays of strings
  it("returns ['Lighthouse', 'Web', 'Flex', 'Bootcamp'] for ['Lighthouse', 'Labs', 'Web', 'Development', 'Flex', 'Bootcamp'],['Labs', 'Development']", () => {
    assert.deepEqual(
      without(
        ["Lighthouse", "Labs", "Web", "Development", "Flex", "Bootcamp"],
        ["Labs", "Development"]
      ),
      ["Lighthouse", "Web", "Flex", "Bootcamp"]
    );
  });
  // Test Case 4: Multiple same-value booleans
  it("returns [true, true, true] for [true, true, true, false, false], [false]", () => {
    assert.deepEqual(without([true, true, true, false, false], [false]), [
      true,
      true,
      true,
    ]);
  });
  // Test Case 5: Multiple same-value numbers
  it("returns [2,3,5,8] for [1, 1, 2, 3, 5, 8], [1]", () => {
    assert.deepEqual(without([1, 1, 2, 3, 5, 8], [1]), [2, 3, 5, 8]);
  });
  // Test Case 6: Empty arrays
  it("returns [] for [], []", () => {
    assert.deepEqual(without([], []), []);
  });
  // Test Case 7: No items to remove
  it("returns ['a','b','c'] for ['a', 'b', 'c'], []", () => {
    assert.deepEqual(without(["a", "b", "c"], []), ["a", "b", "c"]);
  });
  // Test Case 8: Remove all items
  it("returns [] for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1, 2, 3]), []);
  });
  // Test Case 9: Make sure original array is not modified
  it("returns ['hello', 'world', 'lighthouse'], not changing words ", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); // no need to capture return value for this test case
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
