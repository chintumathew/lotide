// Function assertEquals for testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed : ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑 🛑 Assertion Failed : ${actual} !==  ${expected}`);
  }
};
// function to comapre values of two arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for(let i = 0 ; i < array1.length; i++) {
      //return if any non matching value occurs
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};


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