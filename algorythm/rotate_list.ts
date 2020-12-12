// https://leetcode.com/problems/rotate-list/
// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head?.next) return head;

  let newHead = head;
  let len = 1;
  while (newHead.next) {
    newHead = newHead.next;
    len++;
  }
  newHead.next = head;

  let tail = null;
  const idx = k % len;
  while (len - idx >= 0) {
    if (len - idx === 0) tail = newHead;
    newHead = newHead.next;
    len--;
  }
  tail.next = null;

  return newHead;
}
