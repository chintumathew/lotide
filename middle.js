/* Program to return middle values of an array
*/


//Test Assertions
const assertArraysEquals = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("🛑🛑 Failed : Both arrays are of different lenght!");
    process.exit();
  } else {
    for(let i = 0 ; i < array1.length; i++) {
      //return if any non matching value occurs
      if (array1[i] !== array2[i]) {
        console.log("🛑🛑 Failed : value in array1: " ,array1[i] ," !==  value of array2: " , array2[i]);
        return;
      }
    }
    console.log("✅✅ Passed : Both arrays are equall");
  }
};


//Test eqArray
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

//Actual Array
const middle = function (arrayValues) {
  let resultArray = [];
  if (arrayValues.length === 1 || arrayValues.length === 2) {
    return resultArray;
    //odd numbered array
  } if (arrayValues.length % 2 === 1) {
    resultArray.push(arrayValues[Math.floor(arrayValues.length / 2)]);
  }// even numbered array  
  if (arrayValues.length % 2 === 0) {
    resultArray.push(arrayValues[(arrayValues.length / 2 ) - 1]);
    resultArray.push(arrayValues[arrayValues.length / 2]);
  }
  return resultArray;
}


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