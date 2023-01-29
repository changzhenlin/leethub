/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  let evenArr:number[] = [];
  let oddArr: number[] = [];
  // 循环数组
  nums.forEach((num) => {
    // 判断是否为偶数
    if (num % 2 === 0) {
      evenArr.push(num);
    } else {
      oddArr.push(num);
    }
  });
  // 合并数组
  return evenArr.concat(oddArr);
};
// @lc code=end

