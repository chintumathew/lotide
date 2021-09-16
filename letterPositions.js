//function to find letterpositions
const letterPositions = function(sentence) {
  // logic to update results here
  let newString = sentence.split("").join();
  let newValueString = '' ,result = {};
  console.log( "Joined String----: " ,newString);
  for (const elements of newString) {
    if(elements !== ','){
      newValueString = newValueString + elements;
    }
  }
  console.log( "New String------ :",newValueString);
  for (let i = 0 ; i < newValueString.length; i++) {
    let count = [];
    if(newValueString[i] !== ' ' ) {
      for(let j = 1 ; j < newValueString.length ;j++) { 
        if(newValueString[i] === newValueString[j])  {
          count.push(j);
        }
      }
      if(count.length === 0) {
      count.push(i);
      result[newValueString[i]] = count;
      } else
        result[newValueString[i]] = count;
    }
  }
  return result;
};

// function to comapre values of two arrays
const assertArraysEquals = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("🛑🛑 Failed : Both arrays are of different!");
    process.exit();
  } else {
    for(let i = 0 ; i < array1.length; i++) {
      //return if any non matching value occurs
      if (array1[i] !== array2[i]) {
        console.log("🛑🛑 Failed : values mismatch");
        return;
      }
    }
    console.log("✅✅ Passed : Both arrays are equall");
  }
};


//test cases
console.log(letterPositions("lighthouse in the house"));

const expected = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};


//test assertions
assertArraysEquals(letterPositions("hello").e, [1]);
assertArraysEquals(letterPositions("hello").l, [2]);