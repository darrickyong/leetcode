// Input: root = [2, 1, 3]
// Output: true

// Input: root = [5, 1, 4, null, null, 3, 6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// return boolean based on whether or not the tree is a valid BST

// start at root, look at left child, if left child is larger than, return false
//                look at right child, if it is less than, return false
// return true

// [[5, -Infinity, Infinity]]
// lower is the value that all children values need to be greater than (5), update upper with 5

// vertices + edges

//      5
//     / \
//    3   6 // [3, -Infinity, 3]
//   / \
//  1   4
//      /
//     2

const isValidBST = (root) => {
  const queue = [[root, -Infinity, Infinity]];
  while (queue.length) {
    const [currNode, lower, upper] = queue.shift();

    if (currNode.val >= upper) return false;
    if (currNode.val <= lower) return false;

    if (currNode.left) {
      if (currNode.left.val >= currNode.val) {
        return false;
      } else {
        // update upper bound
        queue.push([currNode.left, lower, currNode.val]);
      }
    }

    if (currNode.right) {
      if (currNode.right.val <= currNode.val) {
        return false;
      } else {
        queue.push([currNode.right, currNode.val , upper]);
      }
    }
  };
  return true;
};

