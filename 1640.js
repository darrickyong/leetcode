var canFormArray = function (arr, pieces) {
  const hash = {};
  arr.forEach((ele, idx) => hash[ele] = idx);

  for (let i = 0; i < pieces.length; i++) {
    let subArray = pieces[i];
    let idx;
    for (let j = 0; j < subArray.length; j++) {
      let num = subArray[j];
      if (hash[num] === undefined) return false;
      if (idx === undefined) {
        idx = hash[num];
      } else {
        if (hash[num] - 1 !== idx) {
          return false;
        } else {
          idx = hash[num];
        }
      }
    }
  }
  return true;
};