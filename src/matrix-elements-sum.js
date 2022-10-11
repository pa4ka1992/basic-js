const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixSize = matrix[0].length;
  const arr = [].concat(...matrix);
  return arr.reduce((sum, el, i, array) => {
    if (i < matrixSize - 1 && el !== 0) {
      return (sum += el);
    } else {
      return array[i - matrixSize] !== 0 ? (sum += el) : sum;
    }
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
