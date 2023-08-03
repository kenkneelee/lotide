const assertEqual = require (`../assertEqual`)

// TEST CODE
// should pass, strict equality of numbers
assertEqual(1, 1);
// should pass, strict equality of strings
assertEqual("Lighthouse", "Lighthouse");
// should pass, strict equality of booleans
assertEqual(true, true);
// should fail, inequality of strings
assertEqual("Lighthouse Labs", "Bootcamp");
// should fail, different data types so not strict equality
assertEqual("1", 1);
// should fail, inequality of strings
assertEqual("42", "Fourty two");
// should fail, different data types string - boolean
assertEqual("true", true);
// should fail, different casing
assertEqual("Lighthouse", "lighthouse");
// should fail, not strict equality
assertEqual(true, 1);
