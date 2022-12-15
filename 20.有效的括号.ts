/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */


const map:{[key: string]: string}  = {
  ')': '(',
  ']': '[',
  '}': '{',
};
// @lc code=start
function isValid(s: string): boolean {
  
  let arr = s.split('');
  if (arr.length % 2 !== 0){
    return false;
  }
  let stack:string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if (map.hasOwnProperty(char)) {
     if (stack.pop() !== map[char])
      return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};
// @lc code=end

