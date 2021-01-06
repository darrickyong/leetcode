var findKthPositive = function (arr, k) {
  // O(n) space
  // let int = 1;
  // let count = 0;
  
  // let set = new Set(arr);
  // while (true) {
  //   if (set.has(int)) {
  //     int++;
  //   } else {
  //     count++;
  //     if (count === k) return int;
  //     int++;
  //   }
  // }

  // O(1) space
  let count = 0;
  let num = 1;
  let tracker = 0;
  while (count < k) {
    if (num === arr[tracker]) {
      tracker++;
    } else {
      count++;
      if (count === k) return num;
    }
    num++;
  }
};


// const arr = [2, 3, 4, 7, 11], k = 5; // 9
// const arr = [1, 2, 3, 4], k = 2 // 6
console.log(findKthPositive(arr, k));
