/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const str = digits.join('');
  const num = BigInt(str) + BigInt(1);
  return num.toString().split('').map(Number);
};
// @lc code=end

