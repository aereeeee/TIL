/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Infinity));
  dp[m][n - 1] = 1;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const right = dp[i][j + 1];
      const down = dp[i + 1][j];
      const min = Math.min(right, down) - dungeon[i][j];
      dp[i][j] = Math.max(1, min);
    }
  }
  return dp[0][0];
};
