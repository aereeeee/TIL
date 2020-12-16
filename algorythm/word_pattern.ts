//https://leetcode.com/problems/word-pattern/
function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");

  if (
    words.length !== pattern.length ||
    new Set(pattern).size !== new Set(words).size
  )
    return false;

  let result = true;
  const map = {};

  [...pattern].forEach((char, i) => {
    const mappedChar = map[words[i]];
    if (mappedChar && mappedChar !== char) result = false;
    map[words[i]] = char;
  });

  return result;
}
