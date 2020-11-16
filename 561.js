const arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let sum = 0;
  for (let i  = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

const nums = [62, 22, 6, 52, 1, 2];
console.log(arrayPairSum(nums));