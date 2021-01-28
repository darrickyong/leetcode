// Given 2 non-empty singly linked lists, representing a non-negative number
// 1 > 2 > 3

// Node has val and next
// Given the head of linked list, which represents the largest tens place
// 00123, given one ['1', '2', '3'] = 123
// 12345, given = 12345
// sum = 12468 > convert back to string/array and traverse and create the linked list

// 1 > 2 > 4 > 6 > 8, return 1

// max integer overload


const addTwoNumbers = (l1, l2) => {
  const arrayOne = [];
  while (l1) {
    arrayOne.push(l1.val.toString());
    l1 = l1.next;
  }
  const arrayTwo = [];
  while (l2) {
    arrayTwo.push(l2.val.toString());
    l2 = l2.next;
  }

  // ["1", "2", "3"]
  // ["1", "2", "3", "4", "5"]

  const valueOne = Number(arrayOne.join('')); // '123' => '321'
  const valueTwo = Number(arrayTwo.join('')); // '12345' => '54321'
  const sum = valueOne + valueTwo;
  const sumArray = sum.toString().split(''); // ['1',2468]

  const res = new ListNode(Number(sumArray[0]));
  let currNode = res;

  for (let i = 1; i < sumArray.length; i++) {
    const newNode = new ListNode(Number(sumArray[i]));
    currNode.next = newNode;
    currNode = currNode.next;
  }

  return res;
}
