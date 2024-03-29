/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }
  // 1. 递归
  let cur = head;
  while (cur.next !== null) {
    if (cur.val === cur.next.val) {
      // 删除重复节点
      cur.next = cur.next.next;
    } else {
      // 指针后移
      cur = cur.next;
    }
  }
  return head;
};
// @lc code=end

