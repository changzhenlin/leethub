/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let arr = x.toString().split('');
  let arrfor = arr.slice(0);
  let reverseArr = arr.reverse();
  if (arrfor.join('') === reverseArr.join('')) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end

