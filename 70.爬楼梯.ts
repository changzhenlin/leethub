/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const cache: number[] = [];
  if (n <= 2) return n;
  if (!cache[n]) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return cache[n];
};
// @lc code=end

