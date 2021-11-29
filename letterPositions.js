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



const letterPositions = function(sentence) {
  
  const results = {};
  
  for(let i = 0; i < sentence.length; i++ ){
    
    const letters = sentence[i];
    
    if(results[letters] === undefined){
    results[letters] = [];
    }
  const currentLetters = results[letters];
  currentLetters.push(i)
}

  return results;
};

console.log(letterPositions("hello"));

module.exports = letterPositions;
