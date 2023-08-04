// Import function to test
const assertEqual = require(`../assertEqual`);
// TEST CODE
// Test case 1:should pass, strict equality of numbers
assertEqual(1, 1);
// Test case 2:should pass, strict equality of strings
assertEqual("Lighthouse", "Lighthouse");
// Test case 3:should pass, strict equality of booleans
assertEqual(true, true);
// Test case 4:should fail, inequality of strings
assertEqual("Lighthouse Labs", "Bootcamp");
// Test case 5:should fail, different data types so not strict equality
assertEqual("1", 1);
// Test case 6:should fail, inequality of strings
assertEqual("42", "Fourty two");
// Test case 7:should fail, different data types string - boolean
assertEqual("true", true);
// Test case 8:should fail, different casing
assertEqual("Lighthouse", "lighthouse");
// Test case 9:should fail, not strict equality
assertEqual(true, 1);
