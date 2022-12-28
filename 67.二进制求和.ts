/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  // 二进制转十进制相加，再转回二进制
  // JS二进制表示方式以“0b”为前缀
  // 考虑到大数问题，使用BigInt不能parseInt
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
// @lc code=end

