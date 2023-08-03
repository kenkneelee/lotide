const assertEqual = require (`../assertEqual`);
const head = require(`../head`)

// TEST CODE
// should all pass
// array of numbers
assertEqual(head([5, 6, 7]), 5);
// array of strings
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// array of single number
assertEqual(head([1]), 1);
// empty array
assertEqual(head([]), undefined);
// no input
assertEqual(head(), undefined);
// array of strings
assertEqual(head(["boot", "camp"]), "boot");
// array of mixed strings and numbers
assertEqual(head(["1", 2, 3]), "1");
