function numberOfCharactersEscaped(expression) {
  let open = false;
  let count = 0;
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];
    if (char === '#') {
      open = !open;
    } else {
      let prevChar = expression[i - 1];
      if (prevChar === '!' && char !== '!' && open) {
        count++;
      }
    }
  }
  return count;
};

// const expression = '#ab!c#de!f';
// console.log(numberOfCharactersEscaped(expression));


function countSignals(frequencies, filterRanges) {
  // Write your code here
  let realRange = filterRanges[0];

  var rangeCheck = (arr1, arr2) => {
    let [x, y] = arr1;
    let [a, b] = arr2;

    let maxX = Math.max(x, a);
    let minY = Math.min(y, b);

    if (maxX <= minY) {
      return [maxX, minY];
    } else return [];

  }

  for (let i = 1; i < filterRanges.length; i++) {
    let skimmedRange = rangeCheck(realRange, filterRanges[i]);
    if (!skimmedRange.length) {
      return 0;
    } else realRange = skimmedRange;
  }
  console.log(realRange);

  let count = 0;
  let [freqX, freqY] = realRange;

  frequencies.forEach(freq => {
    if (freq >= freqX && freq <= freqY) count++
  })

  return count;

  // iterate through frequencies to see if it fits in realRange.

}

// const frequencies = [5, 20, 5, 6, 7, 12, 3, 2];
// const filterRanges = [[5, 20], [1, 20], [6, 15]];
// console.log(countSignals(frequencies, filterRanges));
// [1, 2] [3, 4]
// [1, 3] [1, 5]
// [1, 6] [8, 10]
// [1, 4] [2, 3]
// [2, 3] [1, 4]

function minimumMovement(obstacleLanes) {
  // Write your code here

  let count = 0;
  let hash = {
    1: true,
    2: true,
    3: true,
  }

  obstacleLanes.forEach( obs => {
    if (!count && obs == 2) {
      pos -= obs;
    } else {

    }
  })

  return count;

}

const obstacleLanes = [2, 1, 3, 2]
console.log(minimumMovement(obstacleLanes)); // 2
