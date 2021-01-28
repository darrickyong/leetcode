// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// 'eat' = {e: 1, a: 1, t: 1}, [26 items]
// 'tea' = {t: 1, e: 1, a: 1}
// find a way to compare these, maybe write a helper function

// res = {
  // keys are maybe tracker of letter counts 
  // values is an array of words that have the same tracker
// }

var groupAnagrams = function (strs) {
  const res = {};
  // const alpha = 'abcdefghijklmnopqrstuvwxyz';
  // const numbers = '0123456789';
  const a = 'a'.charCodeAt(0); // 97

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const tracker = new Array(26).fill(0);
    for (let j = 0; j < word.length; j++) {
      tracker[word.charCodeAt(j) - a]++;
    }
    if (res[tracker] === undefined) {
      res[tracker] = new Array;
    }
    res[tracker].push(word);
  }

  return Object.values(res);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));