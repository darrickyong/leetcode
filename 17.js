// string containing digits 2-9, inclusive.

// Input: digits = "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

// build associated hashmap of digits => {"2": "abc"}
// if digits is an empty string, return an empty array.
// "2": ["a", "b", "c"]
// "3": ["d", "e", "f"] => 

const hash = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

// const hash = {
//   '2': ['a', 'b', 'c'],
//   '3': ['d', 'e', 'f'],
//   '4': ['g', 'h', 'i'],
//   '5': ['j', 'k', 'l'],
//   '6': ['m', 'n', 'o'],
//   '7': ['p', 'q', 'r', 's'],
//   '8': ['t', 'u', 'v'],
//   '9': ['w', 'x', 'y', 'z'],
// }

// const letterCombinations = (digits) => {
//   if (!digits.length) return [];

//   const res = new Set();

//   // tail recursion
//   const addLetters = (currCombo) => {
//     if (currCombo.length === digits.length) {
//       res.add(currCombo);
//       return;
//     }

//     let array = hash[digits[currCombo.length]];

//     for (let i = 0; i < array.length; i++) {
//       let char = array[i];
//       let copy = currCombo + char;
//       addLetters(copy);
//     }
//   }

//   addLetters('');
//   return Array.from(res);
// };

// create res array to return, which will be filled using a recursive function to be built
// start a recursive function with empty string, and add to res array when length of my string is same as digits

const letterCombinations = (digits) => {
  if (!digits.length) return [];

  const res = new Set();

  const r = (combo) => {
    if (combo.length === digits.length) {
      res.add(combo);
      return;
    }

    for (const letter of hash[digits[combo.length]]) {
      console.log(letter);
      r(combo + letter);
    }
  }

  r('');
  return Array.from(res);
}

const digits = "23";
console.log(letterCombinations(digits));