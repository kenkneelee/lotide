// Import function to test
const eqObjects = require("../eqObjects");
// Helper function for tests
const assert = require("chai").assert;

// TEST CODE
// Define all objects to be used in tests
// Test case 1: All properties are strings
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
// Test case 2: One property is an array
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
// Test case 3: All properties are arrays
const numberPairs = { a: [5, 10], b: [10, 5] };
const anotherNumberPairs = { b: [10, 5], a: [5, 10] };
const thirdNumberPairs = { a: [10, 5], b: [5, 10] };
// Test case 4: Mixed property types
const carObject = {
  make: "Honda",
  model: "Civic",
  doors: 2,
  seats: ["empty", "empty"],
  gas: true,
};
const anotherCarObject = {
  gas: true,
  doors: 2,
  seats: ["empty", "empty"],
  make: "Honda",
  model: "Civic",
};
const familyCarObject = {
  make: "Honda",
  model: "Civic",
  doors: 4,
  seats: ["empty", "empty", "carseat", "carseat"],
  gas: true,
};

// Define tests
describe("#eqObjects", () => {
  // Test case 1: All properties are strings
  it("returns true for shirtObject, anotherShirtObject", () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("returns false for shirtObject, longSleeveShirtObject", () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  // Test case 2: One property is an array
  it("returns true for multiColorShirtObject, anotherMultiColorShirtObject", () => {
    assert.deepEqual(
      eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
      true
    );
  });
  it("returns false for multiColorShirtObject, longSleeveMultiColorShirtObject", () => {
    assert.deepEqual(
      eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
      false
    );
  });
  // Test case 3: All properties are arrays
  it("returns true for numberPairs, anotherNumberPairs", () => {
    assert.deepEqual(eqObjects(numberPairs, anotherNumberPairs), true);
  });
  it("returns false for numberPairs, thirdNumberPairs", () => {
    assert.deepEqual(eqObjects(numberPairs, thirdNumberPairs), false);
  });
  // Test case 4: Mixed property types
  it("returns true for carObject, anotherCarObject", () => {
    assert.deepEqual(eqObjects(carObject, anotherCarObject), true);
  });
  it("returns false for carObject, familyCarObject", () => {
    assert.deepEqual(eqObjects(carObject, familyCarObject), false);
  });
});
