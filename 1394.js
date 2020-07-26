// 1394. 
// Find Lucky Integer in an Array
// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.

// Input: arr = [5]
// Output: -1

// Input: arr = [7,7,7,7,7,7,7]
// Output: 7

var findLucky = function (arr) {
  let count = {};
  arr.forEach( num => {
    if (!count[num]) count[num] = 0;
    count[num] += 1;
  })
  let res = -1;
  Object.keys(count).forEach( n => {
    if ((Number(n) === count[n]) && (Number(n) > res)) res = Number(n);
  })

  return res;
};

console.log(findLucky([2,2,3,4]));