//https://leetcode.com/problems/coin-change/
//time O(NM) space O(M)
//bottom up dp solution (tabulation)

function coinChange(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

//top-down (memoization)
//time O(NM) space O(M)
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

//bfs
//time O(NM) space O(M)
function coinChange3(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  const dp = new Set<number>();
  const queue:number[][] = [[0, 0]];

  while (queue.length > 0) {
    const [sum, count] = queue.shift();

    for (let coin of coins) {
      const newSum = sum + coin;
      if (newSum === amount) return count + 1;
      else if (newSum < amount && !dp.has(newSum)) {
        dp.add(newSum);
        queue.push([newSum, count + 1]);
      }
    }
  }
  return -1;
}
