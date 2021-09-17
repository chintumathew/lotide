const eqObjects = function(ob1 , ob2) {
  const keysOb1 = Object.keys(ob1);
  const keysOb2 = Object.keys(ob2);
  if (keysOb1.length !== keysOb2.length)
    return false;
  for (const elements of keysOb1) {
    if (Array.isArray(ob1[elements]))
      return eqArrays(ob1[elements] , ob2[elements]);
    else if (ob1[elements] !== ob2[elements]) {
      return false;
    }
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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed : ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑 🛑 Assertion Failed : ${actual} !==  ${expected}`);
  }
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


// TEST CODE
assertEqual(eqObjects(cd, cd2) ,false);
assertEqual(eqObjects(cd, dc) , true);


assertEqual(eqArrays({a: 1, b: {c: {d: 2}}},
  {a: 1, b: {c: {d: 3}}}), //false
false);

//'undefined' values will be printed as 'null' in the tests report.
assertEqual(eqArrays({a: 1, b:2, c: undefined},
  {a: 1, b:2, f: undefined}, //false
  false));
