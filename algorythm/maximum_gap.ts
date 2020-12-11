/**
 * https://leetcode.com/problems/maximum-gap/
 * @param {number[]} nums
 * @return {number}
 */

// O(NlogN)
// V8 engine uses Insertion Sort for super short arrays and Quick Sort for longer arrays
const maximumGap = (nums: number[]): number =>
  nums.length > 1
    ? nums
        .sort((a, b) => a - b)
        .reduce((max, cur, i, arr) => {
          const sub = arr[i + 1] - cur;
          return sub > max ? sub : max;
        }, 0)
    : 0;
