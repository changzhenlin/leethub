/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head): boolean {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
// @lc code=end

