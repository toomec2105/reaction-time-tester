// add this comment at the top to modify the given rule on this page  ---> /* eslint no-console: 0 */

// unncomment to test eslint CTRL SHIFT A
/* console.log("Javascript connected");
const myvar = 1; */

// example of require & module.exports
// -------------- for testing jasmine -----------------------
const _ = require('lodash');

function addTwoNumbersWithLodash(num1, num2) {
  return _.add(num1, num2);
}

module.exports = {
  addTwoNumbersWithLodash,
};
// const helper = require ("....");
// helper.addTwoNumbersWithLodash(2,3); 

// but if like this 
// module.exports = addTwoNumbersWithLodash;
// then you can require it like this:
//const addTwoNumbersWithLodash = require ("......");
// addTwoNumbersWithLodash(2,3); 
