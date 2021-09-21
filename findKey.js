
//function implementation
const findKey = function(names , callback) {
  for (const name in names) {
    if (callback(names[name])) {
      return name;
    }
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


// function call
const findKeyValue = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(findKeyValue);

//tests
assertEqual(findKeyValue , "noma");
assertEqual(findKeyValue , "Blue Hill");
assertEqual(findKeyValue , "Ora");

module.exports = findKey;
