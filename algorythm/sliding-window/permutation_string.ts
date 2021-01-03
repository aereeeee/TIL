//https://leetcode.com/problems/permutation-in-string/
function checkInclusion(s1: string, s2: string): boolean {
  if (s1 === s2) return true;
  if (s1.length > s2.length) return false;

  const map = new Map();

  for (let char of s1) {
    map.set(char, map.get(char) + 1 || 1);
  }

  let start = 0, end = 0;
  let count = map.size;

  while (end < s2.length) {
    const endChar = s2[end];
    if (map.has(endChar)) map.set(endChar, map.get(endChar) - 1);
    if (map.get(endChar) === 0) count--;

    while (!count) {
      if (end - start + 1 === s1.length) return true;

      const startChar = s2[start];
      if (map.has(startChar)) map.set(startChar, map.get(startChar) + 1);
      if (map.get(startChar) > 0) count++;
      start++;
    }
    end++;
  }
  return false;
}
