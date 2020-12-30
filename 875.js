// create a function to determine how many hours it will take to eat bananas given a speed

// starting from 1 to the fastestSpeed (which is the max in piles) bsearch and find slowest speed

var minEatingSpeed = function (piles, H) {
  let fastestSpeed = Math.max(...piles);
  if (H === piles.length) return fastestSpeed;

  const howManyHours = (speed) => {
    let hours = 0;
    piles.forEach(pile => {
      hours += Math.ceil(pile / speed)
    });
    return hours;
  };

  let slowestSpeed = 1;

  while (slowestSpeed < fastestSpeed) {
    let midSpeed = Math.floor(slowestSpeed / 2 + fastestSpeed / 2);
    let hoursNeeded = howManyHours(midSpeed);

    if (hoursNeeded <= H) {
      fastestSpeed = midSpeed;
    } else {
      slowestSpeed = midSpeed + 1;
    }
  }

  return slowestSpeed;

};

// Input: piles = [3, 6, 7, 11], H = 8
// Output: 4

const piles = [3, 6, 7, 11], H = 8; // 4
// const piles = [312884470], H = 968709470; // 1
console.log(minEatingSpeed(piles, H)); 