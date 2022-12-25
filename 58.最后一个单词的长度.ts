/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let arr = s.split('');
  let count = 0;
  // 从后往前遍历
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ' ') {
      // 如果是空格，且count为0，继续循环
      if (count === 0) continue;
      else break;
    }
    // 如果不是空格，count++
    count++;
  }
  return count;
};
// @lc code=end

