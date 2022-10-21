/***********************************************************************
Write a function `printObject(obj)` that prints out all key-value pairs
of an object. HINT: use a for loop.
Example:
let bootcamp = {
 name: 'Adam',
 role: 'Developer',
 workPlace: 'Fullstack Academy',
};
printObject(bootcamp); // prints
 name: 'Adam',
 role: 'Developer',
 workPlace: 'Fullstack Academy',
***********************************************************************/

function printObject(obj) {
  for (let key in obj) {
    console.log(key + ' - ' + obj[key]);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = printObject;
