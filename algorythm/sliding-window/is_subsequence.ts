// https://leetcode.com/problems/is-subsequence/
// two pointers
// time O(N) space O(1)

function isSubsequence(s: string, t: string): boolean {
  if (s === t || !s.length) return true;
  if (s.length > t.length) return false;

  let i = 0,
    j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      if (++i === s.length) return true;
    }
    j++;
  }
  return false;
}
