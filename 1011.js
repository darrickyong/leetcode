// Input: weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], D = 5
// Output: 15
// Explanation:
// A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10
// Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like(2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.

// Input: weights = [3, 2, 2, 4, 1, 4], D = 3
// Output: 6
// Explanation:
// A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
// 1st day: 3, 2
// 2nd day: 2, 4
// 3rd day: 1, 4


// Input: weights = [1, 2, 3, 1, 1], D = 4
// Output: 3
// Explanation:
// 1st day: 1
// 2nd day: 2
// 3rd day: 3
// 4th day: 1, 1


// binary search problem 
const shipWithinDays = (weights, D) => {
  const maxCapacity = weights.reduce((a, b) => a + b, 0); // 55
  const minCapacity = Math.max(...weights);

  const calculateDays = (capacity) => {
    let tempWeight = capacity;
    let daysElapsed = 0;
  
    for (let i = 0; i < weights.length; i++) {
      if (tempWeight - weights[i] < 0) {
        daysElapsed++;
        tempWeight = capacity;
      }
      tempWeight -= weights[i];
    }
    return daysElapsed + 1;
  
  }
  
  const bSearch = (left, right) => {
    let midCapacity = Math.floor(((right/2) + (left/2)));
    
    while (left < right) {
      let daysToShip = calculateDays(midCapacity);
      if (daysToShip > D) {
        // capacity is too small
        return bSearch(midCapacity + 1, right);
      } else {
        return bSearch(left, midCapacity - 1);
      }

    }

    return midCapacity;
  }

  return bSearch(minCapacity, maxCapacity);

}


const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const D = 5;
// console.log(shipWithinDays(weights, D)); // 15
// console.log(calculateDays(weights, 20)); // 15
console.log(bSearch(10, 55));