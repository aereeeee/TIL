//https://leetcode.com/problems/coin-change/
//time O(NM) space O(M)
//bottom up dp solution (tabulation)

function coinChange(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i === 11) console.log(dp);
      if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

//top-down (memoization)
//time O(M) space O(M)
function coinChange2(
  coins: number[],
  amount: number,
  dp: Map<number, number> = new Map()
): number {
  if (dp.has(amount)) return dp.get(amount);
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  let min = Infinity;
  for (let coin of coins) {
    const count = coinChange2(coins, amount - coin, dp);
    if (count >= 0) min = Math.min(min, count);
  }
  
  min === Infinity ? dp.set(amount, -1) : dp.set(amount, min + 1);
  return dp.get(amount);
}
