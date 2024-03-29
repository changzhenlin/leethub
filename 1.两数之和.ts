/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target - num), i];
    }
    map.set(num, i);
  }
  return [];
};
// @lc code=end

