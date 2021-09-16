
const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// function to comapre values of two arrays
const assertArraysEquals = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("🛑🛑 Failed : Both arrays are of different lenght!");
    process.exit();
  } else {
    for (let i = 0; i < array1.length; i++) {
      //return if any non matching value occurs
      if (array1[i] !== array2[i]) {
        console.log("🛑🛑 Failed : value in array1: " ,array1[i] ," !==  value of array2: " , array2[i]);
        return;
      }
    }
    console.log("✅✅ Passed : Both arrays are equall");
  }
};

// function to comapre values of two arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      //return if any non matching value occurs
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEquals(results1 , [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEquals(results1 , []);
console.log(eqArrays(results1 , []));