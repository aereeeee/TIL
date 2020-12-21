// https://leetcode.com/problems/longest-consecutive-sequence/
// O(nlogn)
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  let max = 1,
    temp = 1;
  nums
    .sort((a, b) => a - b)
    .reduce((prev, cur) => {
      if (cur - prev === 1) {
        temp++;
      } else if (cur - prev !== 0) {
        max = Math.max(max, temp);
        temp = 1;
      }
      return cur;
    });
  return Math.max(max, temp);
}
