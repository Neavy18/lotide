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
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true
  
const cd2 = { c: "1", d: ["1", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
