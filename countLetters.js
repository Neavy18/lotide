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

const countLetters = function(string){
  
  const results = {};
  const removeSpace = string.split(" ").join("");

  for(let item of removeSpace) {
   
    if (results[item]) {
      results[item] +=1;
      
    } else {
      results[item] = 1;
    }
  }
  return results;
};

assertArrayEqual(countLetters("LHL"), {L:2, H:1});

module.exports = countLetters;