const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')

/*const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}; */

const eqObjects = function(object1, object2) {
  const keysO1 = Object.keys(object1);
  const keysO2 = Object.keys(object2);
  
  if (keysO1.length === keysO2.length) {
    for (let items of keysO1) {
      if (Array.isArray(object1[items]) && Array.isArray(object2[items])) {
        if (!eqArrays(object1[items],object2[items])) {
          return false;
        }
      } else if (object1[items] !== object2[items]) {
        return false;
      }
    }
    return true;
  }
  return false;
  
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true
  
const cd2 = { c: "1", d: ["1", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;