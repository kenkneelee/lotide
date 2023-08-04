// Import function to test
const takeUntil = require("../takeUntil");
// Import helper function for testing
const assert = require("chai").assert;

// TEST CODE
describe("#takeUntil", () => {
  // Test Case: Numbers with number condition callback
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  it("returns [1,2,5,7,2]", () => {
    const results1 = takeUntil(data1, (x) => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  // Test Case: Strings with string condition callback
  const data2 = [
    "I've",
    "been",
    "to",
    "Hollywood",
    ",",
    "I've",
    "been",
    "to",
    "Redwood",
  ];
  it("returns ['I've', 'been', 'to', 'Hollywood']", () => {
    const results2 = takeUntil(data2, (x) => x === ",");
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });

  // Test Case: Empty array
  const data3 = [];
  it("returns []", () => {
    const results3 = takeUntil(data3, (x) => x > 0);
    assert.deepEqual(results3, []);
  });

  // Test Case: No elements meet condition
  const data4 = [213, 564, 432, 43, 123, 54];
  it("returns [213, 564, 432, 43, 123, 54]", () => {
    const results4 = takeUntil(data4, (x) => x < 0);
    assert.deepEqual(results4, [213, 564, 432, 43, 123, 54]);
  });

  // Test Case: All elements meet condition
  const data5 = [" ", " ", " ", " "];
  it("returns []", () => {
    const results5 = takeUntil(data5, (x) => x === " ");
    assert.deepEqual(results5, []);
  });
});
