var getSmallestString = function (n, k) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';
  while (n > 0) {
    const highestVal = (k - n) > 25 ? 25 : (k - n);
    res = alpha[highestVal] + res;
    k -= highestVal + 1;
    n--;
  }
  return res;
};

console.log(getSmallestString(3, 27)) // 'aay'
console.log(getSmallestString(5, 73)) // "aaszz"

// Input: n = 3, k = 27
// Output: "aay"