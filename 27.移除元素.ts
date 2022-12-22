/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      // 删除元素 注意⚠️i--
      nums.splice(i--, 1);
    }
  }
  return nums.length;
}
// @lc code=end

