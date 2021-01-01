//https://leetcode.com/problems/minimum-window-substring/
//sliding window O(N)
function minWindow(s: string, t: string): string {
  if (s === t) return t;
  if (s.length < t.length) return "";

  let start = 0;
  let res = "";
  const map = new Map();

  for (let char of t) {
    map.set(char, map.get(char) + 1 || 1);
  }

  let count = map.size;

  for (let end = 0; end < s.length; end++) {
    const endChar = s[end];
    if (map.has(endChar)) map.set(endChar, map.get(endChar) - 1);
    if (map.get(endChar) === 0) count--;

    while (!count) {
      const substr = s.substring(start, end + 1);
      if (substr.length < res.length || res === "") res = substr;

      const startChar = s[start];
      if (map.has(startChar)) map.set(startChar, map.get(startChar) + 1);
      if (map.get(startChar) > 0) count++;

      start++;
    }
  }
  return res;
}
