// find the maximum sum that can be obtained when summing any length subarray of arr.

// iterate through array, keep track of currSum by adding each element.
// 

const kadane = (arr) => {
  let maxSum = -Infinity;
  let currSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    
    if (currSum > maxSum) {
      maxSum = currSum;
    } else if (currSum < 0) {
      currSum = 0;
    }

    currSum += num;

  }

  return maxSum;

};

const array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
const array1 = [-1, -2, -3, -4, -5]
const array2 = [-1, -2, -3, -4, -5]
console.log(kadane(array));
console.log(kadane(array1));

