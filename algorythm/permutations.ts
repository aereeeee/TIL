//https://leetcode.com/problems/permutations/
function permute(nums: number[]): number[][] {
  if (nums.length <= 1) return [nums];

  const result = [];
  const [first, ...rest] = nums;
  const prev = permute(rest);

  for (let cur of prev) {
    for (let i = 0; i <= cur.length; i++) {
      result.push(cur.slice(0, i).concat([first], cur.slice(i)));
    }
  }

  return result;
};
