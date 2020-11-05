const frequencySort = function (nums) {
  let counter = {};
  nums.forEach(num => {
    if(!counter[num]) counter[num] = 0;
    counter[num]++;
  })
  
  return nums.sort((a, b) => counter[a] - counter[b] || b - a);
};

const nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums));