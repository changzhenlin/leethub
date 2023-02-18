/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 1. 双指针
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  // 从后往前遍历
  while (i >= 0 && j >= 0) {
    // 比较两个数组的最后一个元素
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // 如果 nums2 还有剩余，直接拷贝到 nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

};
// @lc code=end

