// Import function to test
const flatten = require("../flatten");
// Import helper function for testing
const assert = require("chai").assert;
// TEST CODE
describe("#flatten", () => {
  // Test Case 1: Array of arrays
  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9] for [[1,2,3],[4,5,6],[7,8,9]]", () => {
    assert.deepEqual(
      flatten([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
  });
  // Test Case 2: Mixed arrays and numbers
  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9] for [[1,2,3,4],[5,6],7,8,9]", () => {
    assert.deepEqual(
      flatten([[1, 2, 3, 4], [5, 6], 7, 8, 9]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
  });
  // Test Case 3: Mixed arrays of strings and numbers
  it("returns [1,'a',5,'a','b','c',42,'aaaa'] for [1, 'a', 5, ['a', 'b', 'c'], 42, 'aaaa']", () => {
    assert.deepEqual(flatten([1, "a", 5, ["a", "b", "c"], 42, "aaaa"]), [
      1,
      "a",
      5,
      "a",
      "b",
      "c",
      42,
      "aaaa",
    ]);
  });

  // Test Case 4: Empty array
  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
  // Test Case 5: Empty nested array
  it("returns [1,2,3,4,5] for [[],1,2,3,4,[],5]", () => {
    assert.deepEqual(flatten([[], 1, 2, 3, 4, [], 5]), [1, 2, 3, 4, 5]);
  });
  // Test Case 6: Arrays of mixed length and numbers
  it("returns [1,2,3,4,5,6] for [1,2,[3,4],5,[6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  // Test Case 7: Two-level nested array
  it("returns [1,2,3,4,5,6] for [1,[2],[3,[4]], 5,[6]", () => {
    assert.deepEqual(flatten([1, [2], [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  // Test Case 8: Three-level nested array
  it("returns [1,2,3,4,5,6] for [[1,[2,[3]]],[3,[4]], 5,[6]", () => {
    assert.deepEqual(flatten([[1, [2,[3]]], [3, [4]], 5, [6]]), [1, 2, 3, 3, 4, 5, 6]);
  });
});
