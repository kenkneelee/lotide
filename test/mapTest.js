// Import function to test
const map = require("../map");
// Import helper function for testing
const assert = require("chai").assert;

// TEST CASES
describe("#map", () => {
  // Test Case 1: Character party health points
  const partyHealthPoints = [100, 85, 10, 100, 100];
  // Every party member takes 5 damage
  it("returns [95, 80, 5, 95, 95]", () => {
    assert.deepEqual(
      map(partyHealthPoints, (hp) => hp - 5),
      [95, 80, 5, 95, 95]
    );
  });
  // Every party member is instantly dropped to 0 hp
  // Since value modified doesn't depend on original, can use bracket instead of hp
  it("returns [0, 0, 0, 0, 0]", () => {
    assert.deepEqual(
      map(partyHealthPoints, () => 0),
      [0, 0, 0, 0, 0]
    );
  });

  // Test Case 2: Add titles to names
  const students = ["Billy", "Joe", "Johnson"];
  // Add to ending of string
  it("returns array of concatenated strings", () => {
    assert.deepEqual(
      map(students, (student) => `${student} the Coding Master`),
      [
        "Billy the Coding Master",
        "Joe the Coding Master",
        "Johnson the Coding Master",
      ]
    );
  });
  // Add to both sides of string
  it("returns array of concatenated strings", () => {
    assert.deepEqual(
      map(students, (student) => `Sir/Madam ${student} the Coding Master`),
      [
        "Sir/Madam Billy the Coding Master",
        "Sir/Madam Joe the Coding Master",
        "Sir/Madam Johnson the Coding Master",
      ]
    );
  });

  // Test Case 3: Flip boolean values
  const switches = [true, true, false, true, false, false, false];
  it("returns [false, false, true, false, true, true, true]", () => {
    assert.deepEqual(
      map(switches, (thisSwitch) => !thisSwitch),
      [false, false, true, false, true, true, true]
    );
  });
});
