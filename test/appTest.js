const assert = require('assert');
const isSorted = require('../problems/arrays/isSorted');
const avgValue = require('../problems/arrays/avgValue');
const printObject = require('../problems/objects/printObject');
const getFullName = require('../problems/objects/getFullName');
const doesKeyExist = require('../problems/objects/doesKeyExist');
const twoDimensionalTotal = require('../problems/arrays/twoDimensionalTotal');
const valueCounter = require('../problems/objects/valueCounter');
const oddRange = require('../problems/arrays/oddRange');
const isElement = require('../problems/arrays/isElement ');
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
describe('twoDimensionalTotal()', function () {
  it('should return number that is the sum of all numbers in the two dimensional array', function () {
    var arr1 = [
      [5, 2, 5, 3],
      [12, 13],
    ];

    var arr2 = [[2], [1, 9], [1, 1, 1]];

    assert.equal(twoDimensionalTotal(arr1), 40);
    assert.equal(twoDimensionalTotal(arr2), 15);
  });
});
describe('valueCounter()', function () {
  it('should return a count of how many times the value repeats in the object', function () {
    obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' };
    result1 = 3;

    obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
    result2 = 0;

    assert.equal(valueCounter(obj1, 'Anne'), result1);
    assert.equal(valueCounter(obj1, 90), result2);
  });
});
describe('oddRange()', function () {
  it('should return an array containing all positive odd numbers up to `end`', function () {
    assert.deepEqual(oddRange(13), [1, 3, 5, 7, 9, 11, 13]);
    assert.deepEqual(oddRange(6), [1, 3, 5]);
    assert.deepEqual(oddRange(10), [1, 3, 5, 7, 9]);
  });
});
describe('isElement()', function () {
  it('should return a boolean indicating if the element is found inside the array', function () {
    assert.equal(isElement([1, 2, 3, 4, 5], 5), true);
    assert.equal(isElement(['a', 'b', 'c'], 'a'), true);
    assert.equal(isElement(['a', 'b', 'c'], 'd'), false);
  });
});
