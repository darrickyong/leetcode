var commonChars = function (A) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let minCount = Array(26).fill(Infinity);
  for (let i = 0; i < A.length; i++) {
    const word = A[i];
    const wordArray = Array(26).fill(0);
    for (let j = 0; j < word.length; j++) {
      wordArray[word[j].charCodeAt(0) - 97]++;
    }
    // console.log(word, wordArray);
    // console.log(word);
    // console.log(wordArray);
    // console.log('----')
    // console.log(minCount)
    let arrayToReplace = [];
    for (let x = 0; x < alpha.length; x++) {

      arrayToReplace.push(Math.min(minCount[x], wordArray[x]));
    }
    // console.log(word, arrayToReplace);
    minCount = arrayToReplace;
  }
  const res = [];
  minCount.forEach((count, idx) => res.push(...Array(count).fill(alpha[idx])));
  return res;
};

// console.log(commonChars(["bella"]));
console.log(commonChars(["bella", "label", "roller"]));