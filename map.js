const eqArrays = require('./eqArrays')
const assertArrayEqual = require('./assertArraysEqual')


/*const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actual, expected) {
  
  const result = eqArrays(actual, expected);

  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}; */


const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["sky","ceiling", "skyline", "cloud"];

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {

    results.push(callback(item));
  
  }
  return results;
};


const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0] === "s");
const results3 = map(words2, word => word[3] === "l");



assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEqual(results2, [true, false, true, false]);
assertArrayEqual(results3, [false, true, true, false]);

module.exports = map;
