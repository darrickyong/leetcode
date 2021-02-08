var findLHS = function (nums) {
  const hash = {};
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    hash[num] ? hash[num]++ : hash[num] = 1;

    if (hash[num - 1]) res = Math.max(res, hash[num] + hash[num - 1]);
    if (hash[num + 1]) res = Math.max(res, hash[num] + hash[num + 1]);

  }
  return res;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))

// Input: nums = [1, 3, 2, 2, 5, 2, 3, 7]
// Output: 5