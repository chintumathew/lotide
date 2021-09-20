/* Program to return middle values of an array
*/


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

module.exports = middle;