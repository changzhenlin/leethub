/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  // 1. 暴力法
  // 2. 滑动窗口
  // 3. 优化的滑动窗口

  // 1. 暴力法
  // let max = 0;
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i + 1; j <= s.length; j++) {
  //     if (allUnique(s, i, j)) {
  //       max = Math.max(max, j - i);
  //     }
  //   }
  // }
  // return max;

  // 2. 滑动窗口
  let max = 0;
  let i = 0;
  let j = 0;
  let set = new Set();
  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      max = Math.max(max, j - i);
    } else {
      set.delete(s[i++]);
    }
  }
  return max;

  // 3. 优化的滑动窗口
  // let max = 0;
  // let i = 0;
  // let j = 0;
  // let map = new Map();
  // while (i < s.length && j < s.length) {
  //   if (!map.has(s[j])) {
  //     map.set(s[j], j);
  //     j++;
  //     max = Math.max(max, j - i);
  //   } else {
  //     map.delete(s[i]);
  //     i++;
  //   }
  // }
  // return max;
  // let max = 0;
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i + 1; j <= s.length; j++) {
  //     if (allUnique(s, i, j)) {
  //       max = Math.max(max, j - i);
  //     }
  //   }
  // }
  // return max;
};
function allUnique(s: string, start: number, end: number): boolean {
  let set = new Set();
  for (let i = start; i < end; i++) {
    let ch = s.charAt(i);
    if (set.has(ch)) {
      return false;
    }
    set.add(ch);
  }
  return true;
}
// @lc code=end

