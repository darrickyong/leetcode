var simplifyPath = function (path) {
  const pathArr = path.split('/');
  // console.log(pathArr);
  const res = [];

  pathArr.forEach((subPath) => {
    if (subPath === '' || subPath === '.') {

    } else if (subPath === '..') {
      res.pop();
    } else {
      res.push(subPath);
    }

  })
  // console.log(res);
  return '/' + res.join('/')
};

console.log(simplifyPath("/home//foo/")); // "/home/foo"
console.log(simplifyPath("/a/./b/../../c/")); // '/c'