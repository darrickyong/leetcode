// keep two pointers, one pointer for l1, and one for l2.
// keep track of a head to return;
// compare each value, 
// [1, 2, 3], [1, 3, 4]

var mergeTwoLists = function (l1, l2) {
  // if (!l1) return l2;
  // if (!l2) return l1;
  // let array = [];
  // while (l1 || l2) {
  //   if (!l2) {
  //     array.push(l1);
  //     l1 = l1.next;
  //   } else if (!l1) {
  //     array.push(l2);
  //     l2 = l2.next;
  //   } else if (l1.val < l2.val) {
  //     array.push(l1);
  //     l1 = l1.next;
  //   } else {
  //     array.push(l2);
  //     l2 = l2.next;
  //   }
  // }

  // for (let i = 0; i < array.length - 1; i++ ) {
  //   let currNode = array[i];
  //   let nextNode = array[i + 1];
  //   currNode.next = nextNode;
  // }

  // return array[0];

  // TJ's beautiful code
  // if (l1 === null) return l2;
  // if (l2 === null) return l1;
  // let node = l1.val <= l2.val ? l1 : l2;
  // let other = node === l1 ? l2 : l1;
  // let start = node;
  // while (true) {
  //   if (!other) {
  //     return start;
  //   } else if (node.next === null) {
  //     node.next = other;
  //     return start;
  //   } else if (node.next.val <= other.val) {
  //     node = node.next;
  //   } else {
  //     let temp = other.next;
  //     other.next = node.next;
  //     node.next = other;
  //     other = temp;
  //     node = node.next;
  //   }
  // }

  // recursive
  // if (l1 === null) return l2;
  // if (l2 === null) return l1;
  // if (l1.val < l2.val) {
  //   l1.next = mergeTwoLists(l1.next, l2)
  //   return l1;
  // } else {
  //   l2.next = mergeTwoLists(l1, l2.next)
  //   return l2;
  // }

};

// Input: l1 = [1, 2, 4, 5, 6], l2 = [3, 7, 10, 11]
// Output: [1, 1, 2, 3, 4, 4]

const l1 = [1, 2, 4], l2 = [1, 3, 4];