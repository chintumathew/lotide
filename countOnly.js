// Test Assertions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed : ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑 🛑 Assertion Failed : ${actual} !==  ${expected}`);
  }
};


//--------Actual Function-------
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {

  let keysItemsToCount = Object.keys(itemsToCount);
  let result = {};
  for (const items of keysItemsToCount) {
    //loop overfirstnames if only true else return undefined
    if (itemsToCount[items] === true)
      countFirstNames(items, allItems, result);
    else
      result[items] = undefined;
  }
  return result;
};

//------count of firstnames------
const countFirstNames = function(items, allItems, result) {
  let count = 0;
  for (const countItem of allItems) {
    if (items === countItem) {
      count ++;
    }
  }
  if (count === 0)
    result[items] = undefined;
  else
    result[items] = count;
  return result;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);