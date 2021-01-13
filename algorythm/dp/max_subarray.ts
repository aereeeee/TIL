//https://leetcode.com/problems/maximum-subarray/
//time O(N) space O(1)

function maxSubArray(nums: number[]): number {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1] > 0 ? nums[i - 1] : 0;
    max = Math.max(max, nums[i]);
  }
  return max;
}
