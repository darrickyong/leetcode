// keep a hash - key is letter, value is idx we last saw the letter at.

// keep two pointers, a starting and end idx
// start hash with first letter, start checking at second letter
  // if char is not in hash, add the idx
  // if it is in hash, move start to that hash[char] idx + 1, also update the val to end

// every iteration, need to check if (end - start) > maxCount if letter is not in hash

// start = 0
// end = 1

// check if this char is in my hash
  // if it is:
  // 

  // if it is not:
  // 

var lengthOfLongestSubstring = function (s) {
  let hash = {};
  let maxLength = 0;
  let start = 0, end = 0;

  while (end < s.length) {
    let char = s[end];

    if (char in hash) {
      // char is in hash
      start = Math.max(start, hash[char] + 1);
    }
    maxLength = Math.max(maxLength, end - start + 1);

    hash[char] = end;
    end++;
  }

  return maxLength;
};


// start = 3
// end = 6
// Input: s = "abcabcbb"
// s = 'asdfgh'
// Output: 3
// const s = "abcabcbb"; // 3


// start 1
// end 1
// maxlength 0

// { t: 0, }

const s = "dvdf"; // 3

// const s = "dvoqdldf"; // 5
// const s = "ttmmmzuxt"; // 5

console.log(lengthOfLongestSubstring(s));
// # assert(lengthOfLongestSubstring(“dvdf”) == 3)
// assert(lengthOfLongestSubstring(“dvoqdldf”) == 5)
// assert(lengthOfLongestSubstring(“ttmmzuxt”) == 5)