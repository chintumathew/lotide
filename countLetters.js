const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed : ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑 🛑 Assertion Failed : ${actual} !==  ${expected}`);
  }
};



//actual function

const countLetters = function (valueString) {

  let newString = valueString.split("").join();
  let newValueString = '' ,result = {};
  console.log( "Joined String : " ,newString);
  for (const elements of newString) {
    if(elements !== ' ' && elements !== ','){
      newValueString = newValueString + elements;
    }
  }
  console.log( "New String :",newValueString);
  for (let i = 0 ; i < newValueString.length; i++) {
    let count = 0;
    for(let j = 1 ; j < newValueString.length ;j++) {
      if(newValueString[i] === newValueString[j]) {
        count++;
      }
    }
    if(count === 0)
    result[newValueString[i]] = 1;
    else
      result[newValueString[i]] = count;
  }
  return result;

};
//test
const result1 = countLetters("lighthouse in the house"); 
console.log("Actual Result : " ,result1);
const expectedResult = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

console.log("Expected Result : " ,expectedResult);

module.exports = countLetters;
