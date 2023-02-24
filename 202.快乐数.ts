/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;
  do {
    // 快指针走两步
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
  } while (slow !== fast);
  return slow === 1;

};
// 计算一个数的每一位的平方和
function squareSum(n: number): number {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}
// @lc code=end

