var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')') {
      if (stack[stack.length - 1] !== '(') {
        return false;
      } else {
        stack.pop();
      }
    } else if (char === '}') {
      if (stack[stack.length - 1] !== '{') {
        return false;
      } else {
        stack.pop();
      }
    } else if (char === ']') {
      if (stack[stack.length - 1] !== '[') {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return !stack.length;
};

console.log(isValid("()"))      // true
console.log(isValid("()[]{}"))  // true
console.log(isValid("{[]}"))    // true
console.log(isValid("(]"))      // false
console.log(isValid("([)]"))    // false