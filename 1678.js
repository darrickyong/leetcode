var interpret = function (command) {
  let res = '';
  let i = 0;

  while (i < command.length) {
    let char = command[i];
    let nextChar = command[i + 1];
    if (char === 'G') {
      res += char;
      i++;
    } else if (char === '(' && nextChar === ')') {
      res += 'o';
      i += 2;
    } else {
      res += 'al';
      i += 4;
    }

  }
  return res;
};

// Input: command = "G()(al)"
// Output: "Goal"

const command = "G()(al)";
console.log(interpret(command));