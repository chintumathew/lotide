const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed : ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑 🛑 Assertion Failed : ${actual} !==  ${expected}`);
  }
};


//actual function
const findKeyByValue = function(bestTvShows , showValue) {
  let bestTvShowsKeyValues = Object.keys(bestTvShows);
  for (const shows of bestTvShowsKeyValues) {
    if (bestTvShows[shows] === showValue) {
      return shows;
    }
  }
  return undefined;
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log("-----Result----");
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

console.log("-----Assertions----");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "undefined");