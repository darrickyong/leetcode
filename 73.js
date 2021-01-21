// Given an m x n matrix, If an element is 0, set its entire row and column to 0. Do it in-place.
// Iterate through matrix two times:
// First time to grab the rows and columns that need to be set to 0, use a rowSet and a colSet, so that we have O(1) lookup.
// Second time to check if the ele needs to be updated by looking to see if the row is in rowSet, or if the col is in colSet.
// return matrix;

// matrix = [
  // [1, 1, 1], 
  // [1, 0, 0], 
  // [1, 1, 1]
// ]

// rowSet(1)
// colSet(1, 2)

// [
//   [1,0,0],
//   [0,0,0],
//   [1,0,0]
// ]

var setZeroes = function (matrix) {
  let rowSet = new Set();
  let colSet = new Set();
  // sets use O(n + m) space

  const updateCol = col => {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col]) {
        matrix[i][col] = true;
      };
    }
  }
  const updateRow = row => {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[row][i]) {
        matrix[row][i] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let ele = row[j];
      if (!ele) {
        updateCol(j);
        updateRow(i);
        // rowSet.add(i);
        // colSet.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // if ((rowSet.has(i) || colSet.has(j))) {
      if (matrix[i][j] === true) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
  
};
