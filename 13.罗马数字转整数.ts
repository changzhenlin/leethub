/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  let map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let value = map.get(s[i]);
    if (i < s.length - 1 && value < map.get(s[i + 1])) {
      sum -= value;
    } else {
      sum += value;
    }
  }
  return sum;

};
// @lc code=end

