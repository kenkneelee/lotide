// Import function to test
const findKey = require("../findKey");
// HELPER FUNCTIONS
const assert = require("chai").assert;

// TEST CODE
describe("#findKey", () => {
  // Test Case 1: Given in assignment, multiple matching keys
  it("returns 'noma' in object", () => {
    assert.strictEqual(
      findKey(
        {
          "Blue Hill": { stars: 1 },
          "Akaleri": { stars: 3 },
          "noma": { stars: 2 },
          "elBulli": { stars: 3 },
          "Ora": { stars: 2 },
          "Akelarre": { stars: 3 },
        },
        (x) => x.stars === 2
      ),
      "noma"
    );
  });
  // Test Case 2: No matching keys
  it("returns undefined", () => {
    assert.strictEqual(
      findKey({ a: 1, b: 2, c: 3, d: 4 }, (x) => x === 5),
      undefined
    );
  });
  // Test Case 3: Object with Number key values
  it("returns 'f' in object", () => {
    assert.strictEqual(
      findKey({ a: 3, b: 1, c: 4, d: 1, e: 5, f: 9 }, (x) => x > 8),
      "f"
    );
  });
  // Test Case 4: Object with String key values
  it("returns 'Toyota' in object", () => {
    assert.strictEqual(
      findKey(
        { Honda: "Civic", Toyota: "Corolla", Mazda: "3", Nissan: "Sentre" },
        (x) => x === "Corolla"
      ),
      "Toyota"
    );
  });
  // Test Case 5: Object with Boolean key values
  it("returns 'd' in object", () => {
    assert.strictEqual(
      findKey(
        { a: true, b: true, c: true, d: false, e: true, f: false },
        (x) => !x
      ),
      "d"
    );
  });
});
