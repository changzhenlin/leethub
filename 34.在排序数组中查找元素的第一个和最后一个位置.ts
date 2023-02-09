/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  // 1. 二分查找，找到target的位置
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  // 2. 从target的位置向左右两边扩散，找到target的起始位置和结束位置
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 3. 如果没有找到target，返回[-1, -1]
  if (nums[mid] !== target) {
    return [-1, -1];
  }
  //  4. 时间复杂度O(logn), 空间复杂度O(1)
  let start = mid;
  let end = mid;
  while (start >= 0 && nums[start] === target) {
    start--;
  }
  while (end < nums.length && nums[end] === target) {
    end++;
  }
  // 5. 返回结果
  return [start + 1, end - 1];

};
// @lc code=end

