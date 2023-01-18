/*
 * @lc app=leetcode id=917 lang=typescript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
  const arr = s.split('');
  // 用filter过滤掉非字母
  const reverseArr = arr.reverse().filter((char) => {
    return /[a-zA-Z]/.test(char);
  });
  const copyArr = arr.reverse();
  // 判断是否是字母
  const isLetter = (char: string) => {
    return /[a-zA-Z]/.test(char);
  };
  copyArr.forEach((char, index) => {
    if (!isLetter(char)) {
      // 如果不是字母，就插入到reverseArr中
      reverseArr.splice(index, 0, char);
    }
  }
  );
  return reverseArr.join('');
};
// @lc code=end

