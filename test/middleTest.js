const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assertArraysEquals = require('../assertArraysEqual');


//Test Cases
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


//Test assertions

console.log("---------Assertions------");
assertArraysEquals(middle([1,2,3,4,5]) , [3]);
assertArraysEquals(middle([1,2,3,4,5,6]) , [3,4]);

console.log("---------Checking Both Array Values are Same------");
console.log(eqArrays(middle([1,2,3,4,5]) , [3]));