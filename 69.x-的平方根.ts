/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
  let result = x / 2;
  while (Math.abs(result * result - x) > 0.0001) {
    result = (result + x / result) / 2;
  }
  return Math.floor(result);
};
// @lc code=end

