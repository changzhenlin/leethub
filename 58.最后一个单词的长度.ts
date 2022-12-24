/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let arr = s.split('');
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ' ') {
      if (count === 0) continue;
      else break;
    }
    count++;
  }
  return count;
};
// @lc code=end

