// Equality and Assertion Functions
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const eqObjects = require("./eqObjects");
const assertObjectsEqual = require("./assertObjectsEqual");

// Array Functions
const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const flatten = require("./flatten");
const without = require("./without");

// Array and Object Manipulation
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const letterPositions = require("./letterPositions");
const findKeyByValue = require("./findKeyByValue");

// Functions using Callbacks
const findKey = require("./findKey");
const map = require("./map");
const takeUntil = require("./takeUntil");

module.exports = {
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  head,
  tail,
  middle,
  flatten,
  without,
  countLetters,
  countOnly,
  letterPositions,
  findKey,
  findKeyByValue,
  map,
  takeUntil,
};
