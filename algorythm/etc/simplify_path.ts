//https://leetcode.com/problems/simplify-path/
function simplifyPath(path: string): string {
  const arr = path.split("/");
  const res = [];
  for (const s of arr) {
    if (s === "..") res.pop();
    else if (s !== "." && !!s) res.push(s);
  }
  return `/${res.join('/')}`;
}
