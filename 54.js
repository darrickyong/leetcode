// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// [ [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9],
//   [10, 11, 12]]
// ]

// minX, iterate as long as minX is less than maxX
// minY, iterate as long as minY is less than maxY

// maxX
// maxY

// let i 
// let j 

// [x, x, x, x, x, x]
// [x, x, x, x, x, x] // 1, 4
// [x, x, x, x, x, x]
// [x, x, x, x, x, x]
// [x, x, x, x, x, x]
// [x, x, x, x, x, x]
// [x, x, x, x, x, x]

   // 5, 1    // 5, 4


// width = 5
// height = 6
// direction = right, down, left, up

// [0, 2] right
// [3, 2] down
// [3, 0] left, subtract 1 from the width => 
// [1, 0] up, stop at subtract 1 from the height

// when to stop loop?

// Given m x n matrix, return an array with elements in spiral order.
// 
// [ [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9],
// ]

var spiralOrder = function (matrix) {
  let minCol = 0;
  let minRow = 0;
  let maxCol = matrix[0].length - 1;
  let maxRow = matrix.length - 1;
  let res = [];

  while (minCol <= maxCol && minRow <= maxRow) {
    
    for (let i = minCol; i <= maxCol; i++) {
      res.push(matrix[minRow][i]);
    };

    for (let j = minRow + 1; j <= maxRow; j++) {
      res.push(matrix[j][maxCol]);
    };

    if (minRow < maxRow && minCol < maxCol) {
      for (let i = maxCol - 1; i > minCol; i--) {
        res.push(matrix[maxRow][i]);
      }
      for (let i = maxRow; i > minRow; i--) {
        res.push(matrix[i][minRow]);
      }

    }

    minCol++;
    maxCol--
    minRow++;
    maxRow--;

  }
              
  return res;

};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));