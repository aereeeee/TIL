// https://leetcode.com/problems/merge-intervals/
function merge(intervals: number[][]): number[][] {
  if (!intervals.length) return intervals;

  const stack = [];
  intervals.sort((a, b) => a[0] - b[0]);
  stack.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const prev = stack.pop();
    const cur = intervals[i];
    const val =
      prev[1] >= cur[0] ? [[prev[0], Math.max(prev[1], cur[1])]] : [prev, cur];
    stack.push(...val);
  }

  return stack;
}
