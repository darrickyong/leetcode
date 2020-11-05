const restoreString = function (s, indices) {
  let key = {};
  for (let i = 0; i < indices.length; i++) {
    let idx = indices[i];
    key[idx] = s[i];
  }

  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += key[i];
  }

  return res;
};

const s = "codeleet", indices = [4, 5, 6, 7, 0, 1, 2, 3];
console.log(restoreString(s, indices));