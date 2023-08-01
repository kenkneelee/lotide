const assertEqual = require (`./assertEqual`)

const head = function(array) {
  if (Array.isArray(array)) {
    return array[0];
  }
};

module.exports = head