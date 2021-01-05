var combinationSum = function (candidates, target) {
  const res = [];

  const sum = (arr = [], currSum = 0, idx = 0) => {
    if (currSum > target) {
      return;
    }

    if (currSum === target) {
      res.push(arr);
    }

    for (let i = idx; i < candidates.length; i++) {
      let num = candidates[i];
      sum([...arr, num], currSum + num, i);
    }
  }

  sum();
  return res;

};

// Input: candidates = [2, 3, 6, 7], target = 7
// Output: [[2, 2, 3], [7]]

const candidates = [2, 3, 6, 7], target = 7;
console.log(combinationSum(candidates, target));