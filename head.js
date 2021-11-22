const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};


assertEqual(head([5,7,6]), 5);
assertEqual(head(["Hellos", "Lighthouse", "Labs"]), "Hello");