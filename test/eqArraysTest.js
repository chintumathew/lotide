const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// call eqArray
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]) , true); // PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]) , true); // => FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => FAIL