const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const colSize = matrix.length;
  const rowSize = matrix[0].length;
  let currColumn = -1;
  let currRow = 0;
  const mins = (column, row) => {
    let countArr = [];
    const rowMins = (c, r, arr) => {
      if (r > 0 && r < rowSize - 1) {
        arr.push(matrix[c][r - 1], matrix[c][r + 1]);
      } else {
        r === 0
          ? arr.push(matrix[c][r + 1])
          : arr.push(matrix[c][r - 1]);
      }
      if (c !== currColumn) {
        arr.push(matrix[c][r])
      }
    }
    rowMins(column, row, countArr);
    if (column - 1 >= 0) {
      rowMins(column - 1, row, countArr);
    }
    if (column + 1 <= colSize - 1) {
      rowMins(column + 1, row, countArr);
    }
    currRow < rowSize - 1 ? currRow += 1 : currRow = 0
    return countArr.filter((mine) => mine).length;
  };
  return matrix.map((row) => {
    currColumn += 1;
    return row.map(() => {
      return mins(currColumn, currRow);
    });
  });
}

module.exports = {
  minesweeper,
};
