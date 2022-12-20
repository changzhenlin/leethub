/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyHead:ListNode = new ListNode(0);
  let cur = dummyHead;
  let carry = 0;
  while(l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 === null ? 0 : l1.val;
    let y = l2 === null ? 0 : l2.val;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    l1 ? l1 = l1.next : null;
    l2 ? l2 = l2.next : null;
  }
  return dummyHead.next;
};
// @lc code=end

