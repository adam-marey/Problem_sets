const assert = require('assert');
const isSorted = require('../isSorted');

describe('isSorted()', function () {
  it('should return boolean true if numbers in array are in increasing order, false otherwise', function () {
    assert.equal(isSorted([3, 5, 11, 9, 15, 16]), false);
    assert.equal(isSorted([3, 5, 11, 13, 15, 16]), true);
    assert.equal(isSorted([9, 4, 1, 5, 6, 2]), false);
    assert.equal(isSorted([1, 2, 4, 5, 6, 9]), true);
  });
});
