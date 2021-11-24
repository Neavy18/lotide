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

const assertArrayEqual = function(actual, expected) {
  
  const result = eqArrays(actual, expected);

  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {

  let result = [];
  const middleNumber = Math.round(array.length / 2);

  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    result.push(array[middleNumber - 1], array[middleNumber]);
  } else {
    result.push(array[middleNumber - 1]);
  }
  return result;
};

//assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
//assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
//assertArrayEqual(middle([1, 2]), []);