/** 
 * https://leetcode.com/problems/decode-ways/submissions/
 * 
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length < 1) return 0;

  const memo = new Map();
  const recur = (i) => {
    if (i == s.length) return 1;
    if (memo.has(i)) return memo.get(i);

    let res = 0;
    const isValid = s[i] > 0 && i < s.length;
    if (isValid) res += recur(i + 1);
    if (isValid && s[i] + s[i + 1] < 27) res += recur(i + 2);

    memo.set(i, res);
    return res;
  }
  return recur(0);
};