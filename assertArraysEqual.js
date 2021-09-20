// function to comapre values of two arrays
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

module.exports = assertArraysEquals;