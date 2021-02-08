// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// n = 4
// Output: 5
// 1,1,1,1
// 1,1,2
// 1,2,1
// 2,1,1
// 2,2

// n = 5
// Output: 8
// 1,1,1,1,1
// 1,1,1,2
// 1,1,2,1
// 1,2,1,1
// 1,2,2
// 2,1,1
// 2,1,1
// 2,2,1

// 1, 1, 2, 3, 5, 8, 13, etc.

// memo is a hash of all my precalculated values

// n = 0
// []
// n = 1
// [1]

// while length memo is less than or equal, 
  // then create new array of (n - 1) and add 1's to all of it,
  // then create new array of (n - 2) and add 2's to all of it,

var climbStairs = function (n) { // 2
  let res = [[[]], [[1]]];
  while (res.length - 1 < n) { // 2 - 1 < 2
    const num = res.length; // 2
    const firstArray = res[num - 2]; // res[0] > [[]]
    const secondArray = res[num - 1]; // res[1] > [[1]]
    const arrayToPush = [];
    for (let i = 0; i < firstArray.length; i++) {
      const subArrayOne = firstArray[i]; // []
      arrayToPush.push([2, ...subArrayOne]);
    }
    for (let i = 0; i < secondArray.length; i++) {
      const subArrayTwo = secondArray[i]; // [1]
      arrayToPush.push([1, ...subArrayTwo]); // [1, 1]
    }
    res.push(arrayToPush);
  }
  return res[res.length - 1].length;
};

console.log(climbStairs(4));