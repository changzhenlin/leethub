/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  // 中序遍历：左根右
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let p = root;
  while (p || stack.length) {
    // 左子树入栈
    while (p) {
      stack.push(p);
      p = p.left;
    }
    // 根节点出栈
    const n = stack.pop();
    res.push(n.val);
    p = n.right;
  }
  return res;
};
// @lc code=end

