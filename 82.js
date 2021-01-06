// remove all nodes that have duplicate values
// need to keep track of head node to return
// traverse nodes, while also keeping track of the first duplicate node. If more than one node is found, adjust next values

// how to check if head has duplicates

var deleteDuplicates = function (head) {
  let originalHead = head;
  let currNode = head;
  let nextNode = currNode.next;
  let nextNextNode = nextNode.next;

  while (nextNode) {
    if (currNode.val === nextNode.val) {

    } else {

    };
  }

  // const dummy = new ListNode();
  // dummy.next = head;
  // let node = dummy;                                                  // the last known distinct node
  // while (node.next) {
  //   if (node.next.next && node.next.val === node.next.next.val) {  // if the next two nodes are equal...
  //     let nonValNode = node.next.next.next;
  //     while (nonValNode && nonValNode.val === node.next.val) {   // ...find the first one that isn't...
  //       nonValNode = nonValNode.next;
  //     }
  //     node.next = nonValNode;                                    // ...and glue it to the last known distinct node;...
  //   } else {
  //     node = node.next;                                          // ...otherwise the next node is distinct
  //   }
  // }
  // return dummy.next;


  // WTH?
  // if (!head) return null
  // let dup = false
  // while (head.next && head.val === head.next.val) {
  //   head = head.next
  //   dup = true
  // }
  // head.next = deleteDuplicates(head.next)
  // return dup ? head.next : head <-- return head.next

};


// Input: head = [1, 2, 3, 3, 4, 4, 5]
// Output: [1, 2, 5]

// Input: head = [1, 1, 1, 2, 3]
// Output: [2, 3]

const head = [1, 2, 3, 3, 4, 4, 5];
console.log(deleteDuplicates(head));