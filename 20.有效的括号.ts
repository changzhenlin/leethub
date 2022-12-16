/*
 * @lc app=leetcode.cn id=20 lang=typescript
 * 为什么访问不到map变量？？？
 * [20] 有效的括号
 */


const map:{[key: string]: string} = {
  ')': '(',
  ']': '[',
  '}': '{',
}
// @lc code=start
function isValid(s: string): boolean {
  
  let arr = s.split('');
  // 奇数个肯定不对
  if (arr.length % 2 !== 0){
    return false;
  }
  let stack:string[] = [];
  for (const char in arr) {
    // 如果是右括号，就出栈，看是否匹配
    if (map.hasOwnProperty(char)) {
     if (stack.pop() !== map[char])
      return false;
    } else {
      stack.push(char);
    }
  }
  // 不能return true，因为可能栈里还有元素
  return stack.length === 0;
}
// @lc code=end

