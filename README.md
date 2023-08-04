# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kenkneelee/lotide`

**Require it:**

`const _ = require('@kenkneelee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

### Equality and Assertion Functions

- `assertEqual(actual, expected)` : prints result of equality comparison between two values to console
- `eqArrays(array1, array2)` : returns truthy/falsy result of equality comparison between two input arrays
- `assertArraysEqual(array1, array2)` : prints result of array equality comparison to console
- `eqObjects(object1, object2)` : returns truthy/falsy result of object equality comparison
- `assertObjectsEqual(object1, object2)` : prints result of object equality comparison to console

### Array Functions

- `head(array)` : returns the first element of an input array
- `tail(array)` : returns all but the first element of an input array
- `middle(array)` : returns an array of the middle value(s) of an input array
- `flatten(nestedArray)` : given nested array, flattens inside arrays and moves them one level up
- `without(source, itemsToRemove)` : given a source array and itemsToRemove array, removes all instances of every item in itemsToRemove from source and returns filtered array.

### Array and Object Manipulation

- `countLetters(sentence)` : Given an input sentence, returns an object with key:value pairs corresponding to occurrences of each character
- `countOnly(allItems, itemsToCount)` : Given an array (allItems) to search and object itemsToCount {key:boolean}, return an object with key:value pairs corresponding to search:occurrences
- `letterPositions(sentence)` : Given a sentence, returns an object with key:value pairs corresponding to characters: positions of each occurrence of the character.

### Functions using Callbacks

- `findKey(object, callback)`: Given an object and callback, loop through the object's keys and return first key that returns truthy value from callback. Returns undefined if no matches found.
- `findKeyByValue(contentList, searchTerm)` : given an object to search and a property value, return the name of the first property whose value matches search term
- `map(array, callback)` : given an array and callback, perform the callback function on every element in the array
- `takeUntil(array, callback)` : given an array and callback, return new array with all original values until the first value that fulfills callback
