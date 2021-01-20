var maxOperations = function (nums, k) {
  let hashCount = {};
  let res = 0;

  nums.forEach((num) => {
    if (!hashCount[num]) hashCount[num] = 0;
    hashCount[num]++;

    let diff = k - num;
    if (num === diff) {
      if (hashCount[num] > 1) {
        res++;
        hashCount[diff]--;
        hashCount[num]--;
      }
    } else {
      if (hashCount[diff] && hashCount[num]) {
        res++;
        hashCount[diff]--;
        hashCount[num]--;
      }
    }
  })

  return res;

};

console.log(maxOperations([1,2,3,4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1

// Input: nums = [1, 2, 3, 4], k = 5
// Output: 2