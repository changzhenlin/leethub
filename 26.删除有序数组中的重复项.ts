/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    // 如果当前元素与前一个元素不相等，则将当前元素赋值给前一个元素的下一个元素
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
      /**
       * 上行也可写成
       * i++;
       * nums[i] = nums[j];
       */
    }
  }
  return ++i;
  /**
   * 上行也可写成
   * return i + 1;
   */

};
// @lc code=end

