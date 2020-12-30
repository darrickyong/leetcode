// Given an array of n, sorted in ascending order. This array might be rotated, or might not be.
// Rotation [1,2,3,4,5] = [4,5,1,2,3]

// return the smallest number in this array

// Input: nums = [3, 4, 5, 1, 2]
// Output: 1
// Explanation: The original array was[1, 2, 3, 4, 5] rotated 3 times.

// n == nums.length
// 1 <= n <= 5000
//   - 5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

// [ 2, 3, 5, 10, 11]  for non-rotated array, check first and last values in array, if first ele is smaller than last, return first element.
// []
// [2, 3, 5, 10, 0] for a rotated array, check the mid value against the last ele. If mid ele is smaller, findMin on the left half. Otherwise
// findMin on right half. 

// [5, 1, 2, 3, 4]


const findMin = (nums) => {
  if (nums.length === 1) return nums[0];

  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }
  
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx < rightIdx) {
    let midIdx = Math.floor((rightIdx/2) + (leftIdx/2));
    let left = nums[leftIdx];
    let right = nums[rightIdx];
    let mid = nums[midIdx];

    if (mid > nums[midIdx + 1]) return nums[midIdx + 1];
    if (mid < nums[midIdx - 1]) return mid;
  
    if (mid < right) {
      rightIdx = midIdx;
    } else {
      leftIdx = midIdx;
    }
  }

};


const nums = [3, 4, 5, 1, 2];
const nums = [5, 1, 2, 3, 4];
console.log(findMin(nums)); // 1