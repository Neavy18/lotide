const middle = function(array) {
  let length = array.length

  let result = [];

  const middleNumber = Math.round(array.length / 2);

  if (length <= 2) { return result };
    

  if (array.length % 2 === 0) {
    result.push(array[middleNumber - 1], array[middleNumber]);
  } else {
    result.push(array[middleNumber - 1]);
  }
  return result;
};

module.exports = middle;

