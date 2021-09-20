const assertEqual = require('./assertEqual');

const head = function(array) {
  let firstItem = array[0];
  return firstItem;
};

module.exports = head;