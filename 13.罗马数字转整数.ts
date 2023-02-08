/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  //  1. 建立一个map，存储罗马数字和对应的值
  let map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  // 2. 遍历字符串，如果当前字符对应的值小于下一个字符对应的值，
  // 那么就减去当前字符对应的值，否则就加上当前字符对应的值
  // 3. 最后返回sum
  // 4. 时间复杂度O(n), 空间复杂度O(1)
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

