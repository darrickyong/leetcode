const maxArea = function (height) {
  let res = 0,
      left = 0,
      right = height.length - 1;

  while (left < right) {
    let lHeight = height[left];
    let rHeight = height[right];
    res = Math.max(res, Math.min(lHeight, rHeight) * (right - left));
    if (lHeight < rHeight) {
      left++;
    } else {
      right--;
    }
  }

  return res;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));