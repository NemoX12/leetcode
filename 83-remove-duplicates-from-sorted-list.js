// Define the ListNode constructor
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let head = new ListNode(arr[0]);
  let currentNode = head;

  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }

  return head;
}

// Create a linked list
let linkedList = createLinkedList([1, 1, 2]);

// ~~~~~~Leetcode func:

var deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

// Runtime complexity O(n)
// Memory complexity O(1)
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5263871/dsadasdassdkfposdk/

console.log(deleteDuplicates(linkedList));
