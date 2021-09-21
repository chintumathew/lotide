const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle');


//Test Cases

describe('#middle' , () => {
  it("returns ['Lighthouse'] for ['Lighthouse', 'Labs']" , () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), [ 'Lighthouse']);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]" , () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]" , () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [ 2, 3]);
  });

  it("returns [] for [1] " , () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2] " , () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});