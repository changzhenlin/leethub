/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummyHead:ListNode = new ListNode(0);
  let head:ListNode = dummyHead;
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }
  // 两个链表都不为空
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      // 将list1的节点插入到head后面
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    // head指针后移
    head = head.next;
  }
  // 有一个链表为空
  head.next = list1 === null ? list2 : list1;
  return dummyHead.next;
};
// @lc code=end

