/*
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
*/
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function has_cycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false
}