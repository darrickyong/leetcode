var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  let res = 0;
  while (i <= j) {
    if (people[i] + people[j] > limit) {
      res++;
      j--;
    } else {
      res++;
      i++;
      j--;
    }
  }

  return res;
};