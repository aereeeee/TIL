// https://leetcode.com/problems/longest-palindromic-substring/

function longestPalindrome(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  function expand(left, right) {
    while (left >= 0 && s[left] === s[right]) {
      left--;
      right++;
    }
    left++;
    right--;

    if (res.length <= right - left) {
      res = s.slice(left, right + 1)
    }
  }
  return res;
};
