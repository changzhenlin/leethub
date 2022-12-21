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
/***
 * 思路：
 * 1. 两个链表逐位相加，需要考虑进位，其中一个链表为空时，视为0
 * 2. 生成新的链表，将结果存储在新链表中
 * 3. 直到两个链表都为空，且进位数为0
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 虚拟头节点
  let dummyHead:ListNode = new ListNode(0);
  let cur = dummyHead;
  // 进位数
  let carry = 0;
  // 两个链表都为空，且进位数为0时，结束循环
  while(l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 === null ? 0 : l1.val;
    let y = l2 === null ? 0 : l2.val;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    // 生成新节点
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    // 移动指针
    l1 ? l1 = l1.next : null;
    l2 ? l2 = l2.next : null;
  }
  // 返回虚拟头节点的下一个节点
  return dummyHead.next;
};
// @lc code=end

