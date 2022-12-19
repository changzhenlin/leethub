/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let resStr = '';
  // 以第一个字符串为基准
  let baseStr = strs[0];
  if (strs.length === 0) {
    return resStr;
  }
  for (let i = 0; i < baseStr.length; i++) {
    // 从第一个字符开始，依次截取字符串
    let s = baseStr.substring(0, i + 1);
    // 判断数组中的每个字符串是否以s开头
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

