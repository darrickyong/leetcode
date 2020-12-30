// iterate through apples array, check how many excess apples I have beyond yesterday.

// On 0th day, one apple grows that will rot on Day 4. +1 
// On 1st day, two apples grow that will rot on Day 4. +2
// On 2nd day, three apples grow that will rot on Day 3. +0
// On 3rd day, five apples grow that will rot on Day 7. +4
// On 4th day, two apples grow that will rot on Day 6. +0

// On ith day, if my current totalApples exceeds or is equal to how long the apples can last
// (days - (i + apples)), do nothing. Otherwise, add any excess to my totalApples.


var eatenApples = function (apples, days) {
  let totalApples = 0;
  for (let i = 0; i < apples.length; i++) {
    let applesProduced = apples[i];
    let daysToRot = days[i];
    let dayToRot = i + daysToRot;
    if (totalApples >= dayToRot) {
      // i already have enough apples to last me to dayToRot;
    } else {

      let excessApplesToday = Math.min(applesProduced, daysToRot)
      // let excessApples = Math.min(applesProduced, daysToRot)
      let applesAlreadyAccounted = (totalApples - i); // if positive, it means I still have apples to eat in my backlog
      if (applesAlreadyAccounted <= 0) {
        totalApples += excessApplesToday;
      } else {
        totalApples += excessApplesToday - applesAlreadyAccounted;
      }
      // console.log(applesAlreadyAccounted);
      // totalApples += excessApples;
    }
    

  };
  return totalApples;
};

// Input: apples = [1, 2, 3, 5, 2], days = [3, 2, 1, 4, 2]
// Output: 7

// const apples = [1, 2, 3, 5, 2], 
//       days   = [3, 2, 1, 4, 2];
// const apples = [1, 3, 3, 7, 2], 
//       days   = [3, 6, 1, 4, 2];

const apples = [3, 0, 0, 0, 0, 2], 
days = [3, 0, 0, 0, 0, 2]

console.log(eatenApples(apples, days));