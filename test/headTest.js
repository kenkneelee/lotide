const assertEqual = require (`../assertEqual`);
const head = require(`../head`)

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head(), undefined);
assertEqual(head(["boot", "camp"]), "boot");
assertEqual(head(["1", 2, 3]), "1");
