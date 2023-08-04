// Import function to test
const countOnly = require("../countOnly");
// Import helper function for testing
const assert = require("chai").assert;

// TEST CODE
// Declare variables to be used in tests
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe("#countOnly", () => {
  // Test Case 1: exists in input array
  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  // Test Case 2: does not exist in input array
  it("returns undefined for 'Karima'", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  // Test Case 3: occurs twice in input array
  it("returns 2 for 'Fang'", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  // Test Case 4: told not to search for this variable (false input)
  it("returns undefined for 'Agouhanna'", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});
