/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let max = 0;
  let start = 0;
  let end = 0;
  // 1. 暴力法
  for (let i = 0; i < s.length; i++) {
    // 奇数长度
    let len1 = expandAroundCenter(s, i, i);
    //  偶数长度
    let len2 = expandAroundCenter(s, i, i + 1);
    //  两者取最大值
    let len = Math.max(len1, len2);
    // 更新最大值
    if (len > max) {
      max = len;
      // 更新起始位置
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};
// 以 left 和 right 为中心向两边扩散
function expandAroundCenter(s: string, left: number, right: number): number {
  let L = left;
  let R = right;
  // 两边相等时，继续扩散
  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }
  // 返回长度
  return R - L - 1;
}
// @lc code=end

