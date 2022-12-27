/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const str = digits.join('');
  // 用 BigInt 处理大数
  const num = BigInt(str) + BigInt(1);
  // map(Number) 是将字符串数组转换为数字数组
  return num.toString().split('').map(Number);
};
// @lc code=end

