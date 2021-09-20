const eqObjects = function(ob1 , ob2) {
  const keysOb1 = Object.keys(ob1);
  const keysOb2 = Object.keys(ob2);
  if (keysOb1.length !== keysOb2.length)
    return false;
  for (const elements of keysOb1) {
    if (Array.isArray(ob1[elements]))
      return eqArrays(ob1[elements] , ob2[elements]);
    if (ob1[elements] !== ob2[elements]) {
      return false;
    }
    return true;
  }
};


// function to comapre values of two arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  else {
    for (let i = 0; i < array1.length; i++) {
      //return if any non matching value occurs
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected , ob1, ob2) {
  // Implement me!
  const inspect = require('util').inspect; // 
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed : ${inspect(ob1)}  ===  ${inspect(ob2)}`);
  } else {
    console.log(`🛑 🛑 Assertion Failed : ${inspect(ob1)} !==  ${inspect(ob2)}`);
  }
};

const obj1 = {
  type: "car",
  color: "red"
};

const obj2 = {
  type: "car",
  color: "red"
};

const obj3 = {
  type: "bike",
  color: "red"
};

assertObjectsEqual(eqObjects(obj1, obj2), true, obj1, obj2);
assertObjectsEqual(eqObjects(obj1, obj3), true, obj1, obj3);
assertObjectsEqual(eqObjects(obj2, obj3), true, obj2, obj3);