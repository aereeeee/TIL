// https://leetcode.com/problems/sort-colors/

// sort array has 3 type of element
// use 3 pointer to swap
// time O(N) space O(1)
// or count each element and fill array again


function sortColors(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;
  let cur = 0;

  while (cur <= right) {
    const val = nums[cur];
    if (val === 0) {
      //NOTE use postfix operator
      swap<number>(cur++, left++, nums);
    } else if (val === 2) {
      swap<number>(cur, right--, nums);
    } else {
      cur++;
    }
  }
}

function swap<T>(i: number, j: number, arr: T[]): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
