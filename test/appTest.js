const assert = require('assert');
const isSorted = require('../problems/arrays/isSorted');
const avgValue = require('../problems/arrays/avgValue');
const printObject = require('../problems/objects/printObject');
const getFullName = require('../problems/objects/getFullName');
const doesKeyExist = require('../problems/objects/doesKeyExist');
describe('isSorted()', function () {
  it('should return boolean true if numbers in array are in increasing order, false otherwise', function () {
    assert.equal(isSorted([3, 5, 11, 9, 15, 16]), false);
    assert.equal(isSorted([3, 5, 11, 13, 15, 16]), true);
    assert.equal(isSorted([9, 4, 1, 5, 6, 2]), false);
    assert.equal(isSorted([1, 2, 4, 5, 6, 9]), true);
  });
});
describe('avgValue()', function () {
  it('should return the average of an array of numbers', function () {
    assert.equal(avgValue([10, 20]), 15);
    assert.equal(avgValue([2, 3, 7]), 4);
    assert.equal(avgValue([100, 60, 64]), 74.66666666666667);
  });
});
describe('printObject()', function () {
  it('test this function manually', function () {});
});
describe('getFullName()', function () {
  it("should return string of the person's full name", function () {
    let p1 = { firstName: 'John', lastName: 'Doe' };
    let p2 = { firstName: 'Charlie', lastName: 'Brown', age: 9 };

    assert.equal(getFullName(p1), 'John Doe');
    assert.equal(getFullName(p2), 'Charlie Brown');
  });
});
describe('doesKeyExist()', function () {
  it('should return a boolean true if the object has the key, false otherwise', function () {
    var obj = { name: 'Adam', course: 'JavaScript' };

    assert.equal(doesKeyExist(obj, 'course'), true);
    assert.equal(doesKeyExist(obj, 'name'), true);
    assert.equal(doesKeyExist(obj, 'bootcamp'), false);
  });
});
