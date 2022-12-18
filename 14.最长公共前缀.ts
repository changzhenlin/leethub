/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let resStr = '';
  let baseStr = strs[0];
  if (strs.length === 0) {
    return resStr;
  }
  for (let i = 0; i < baseStr.length; i++) {
    let s = baseStr.substring(0, i + 1);
    let isCommon = strs.every((str) => {
      return str.startsWith(s);
    });
    if (isCommon) {
      resStr = s;
    }
  }
  return resStr;
};
// @lc code=end

