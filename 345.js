const reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let vowelsIdx = [];
  for (let i = 0; i < s.length; i++) {
    if(vowels.has(s[i])) vowelsIdx.push(i);
  }
  let word = s.split("");
  let first = 0;
  let back = vowelsIdx.length - 1;

  while (first <= back) {
    let firstIdx = vowelsIdx[first];
    let backIdx = vowelsIdx[back];
    let temp = word[firstIdx];
    word[firstIdx] = word[backIdx];
    word[backIdx] = temp;
    first++;
    back--;
  }

  return word.join("");
};

const str = "hello";
console.log(reverseVowels(str));