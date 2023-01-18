/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  let evenArr:number[] = [];
  let oddArr: number[] = [];
  nums.forEach((num) => {
    if (num % 2 === 0) {
      evenArr.push(num);
    } else {
      oddArr.push(num);
    }
  });
  return evenArr.concat(oddArr);
};
// @lc code=end

