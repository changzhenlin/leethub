/*
 * @lc app=leetcode id=917 lang=typescript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
  const arr = s.split('');
  const reverseArr = arr.reverse().filter((char) => {
    return /[a-zA-Z]/.test(char);
  });
  const copyArr = arr.reverse();
  const isLetter = (char: string) => {
    return /[a-zA-Z]/.test(char);
  };
  copyArr.forEach((char, index) => {
    if (!isLetter(char)) {
      reverseArr.splice(index, 0, char);
    }
  }
  );
  return reverseArr.join('');
};
// @lc code=end

