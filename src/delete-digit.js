const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(num) {
  const arr = num.toString().split('')
  let maxNum = 0
  for (let i = 0; i < arr.length; i++) {
    const iterValue = arr.map((el, index) => {
      if (i !== index) {
        return el
      }
    }).join('')
    if (iterValue > maxNum) {
      maxNum = +iterValue
    }  
  }
  return maxNum    

}

module.exports = {
  deleteDigit
};
