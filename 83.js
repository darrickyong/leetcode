// 1 1 2

var deleteDuplicates = function (head) {
  if (!head) return head;
  let currNode = head;

  let nextNode = currNode.next;

  while (nextNode) {
    if (currNode.val === nextNode.val) {
      nextNode = nextNode.next;
    } else {
      currNode.next = nextNode;
      currNode = nextNode;
      nextNode = currNode.next;
    }
  }

  currNode.next = null;

  return head;
};