//https://leetcode.com/problems/insert-interval/submissions/
//use binary search cause it's already sorted
//time O(logN) space O(1)

function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (!intervals.length) return [newInterval];
  const [newStart, newEnd] = newInterval;

  let first = 0,
    pivot = 0,
    step = 0,
    count = intervals.length;

  while (count > 0) {
    step = Math.floor(count / 2);
    pivot = first + step;
    if (intervals[pivot][1] < newStart) {
      first = ++pivot;
      count -= ++step;
    } else count = step;
  }

  let last = first;
  count = intervals.length - first;

  while (count > 0) {
    step = Math.floor(count / 2);
    pivot = last + step;
    if (intervals[pivot][0] <= newEnd) {
      last = ++pivot;
      count -= ++step;
    } else count = step;
  }

  if (last === first) {
    intervals.splice(first, 0, newInterval);
  } else {
    intervals[first] = [
      Math.min(newStart, intervals[first][0]),
      Math.max(newEnd, intervals[last - 1][1]),
    ];
    intervals.splice(++first, --last - first);
  }

  return intervals;
}
