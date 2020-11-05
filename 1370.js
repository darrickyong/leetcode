const sortString = function (s) {
  const alphaStr = "abcdefghijklmnopqrstuvwxyz";
  let alphaHash = {};
  for (let i = 0; i < alphaStr.length; i++) {
    let letter = alphaStr[i];
    alphaHash[i] = letter;
    alphaHash[letter] = i;
  }

  let alphaArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let idx = alphaHash[letter];
    alphaArr[idx] += 1;
  }
  
  let res = "";
  let increase = true;
  let i = 0;

  while (res.length < s.length) {

    if (alphaArr[i]) {
      let letter = alphaHash[i];
      res += letter;
      alphaArr[i]--;
    }

    if (increase) {
      i++;
    } else {
      i--;
    }

    if (i === 26) {
      increase = false;
    } else if (i === -1) {
      increase = true;
    }
    
  }

  return res;

};

const s = "aaaabbbbcccc";
console.log(sortString(s));