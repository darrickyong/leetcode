// Given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.
// Return the minimum number of steps to make the given string empty.
// A string is a subsequence of a given string, if it is generated by deleting some characters of a given string without changing its order.
// A string is called palindrome if is one that reads the same backward as well as forward.

// Input: s = "ababa"
// Output: 1
// Explanation: String is already palindrome

// Input: s = "abb"
// Output: 2
// Explanation: "abb" -> "bb" -> "". 
// Remove palindromic subsequence "a" then "bb".

// Input: s = "baabb"
// Output: 2
// Explanation: "baabb" -> "b" -> "". 
// Remove palindromic subsequence "baab" then "b".

// Input: s = "";
// Output: 0;


var removePalindromeSub = function (s) {};