//function to compare two arrays
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

//function to return a subset of a given array, removing unwanted elements.
const without = function (source ,itemsToRemove) {
  let newArrayAfter = [];
  //loop over source array
  for (const elements of source) {
    let valuePresent = false;
    //loop over itemsToRemove array
    for (const items of itemsToRemove) {
      if (elements === items) {
        valuePresent = true;
        break;
      }
    }
    if(!valuePresent) {
      newArrayAfter.push(elements);
    }
    
  }
  return newArrayAfter;
};

//function reoving unwanted elements
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], ["1", 2, "3"])); // => ["1", "2"]

//test 1 :check original array not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEquals(words, ["hello", "world", "lighthouse"]); //pass

//test2
assertArraysEquals(without([1, 2, 3], [1]),[2,3]); // =>  pass
assertArraysEquals(without(["1", "2", "3"], ["1", 2, "3"]), ["2"]); // => pass

