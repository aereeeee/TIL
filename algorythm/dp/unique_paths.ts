// https://leetcode.com/problems/unique-paths/submissions/
// time O(mn) space O(mn)

function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) return 1;
  const dp: number[][] = Array(m).fill(Array(n).fill(0));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const left = dp[i][j - 1];
      const top = dp[i - 1][j];
      dp[i][j] = left + top;
    }
  }
  return dp[m - 1][n - 1];
}
