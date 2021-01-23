//https://leetcode.com/problems/frog-jump/submissions/
//O(n^2) spaceO(n^2)
//dfs+dp 
//visualize dfs tree

function canCross(stones: number[]): boolean {
  const dp = new Map<number, Set<number>>();
  const stoneSet = new Set<number>(stones);

  function dfs(cur: number, unit: number): boolean {
    const next = cur + unit;
    const visited = dp.get(cur) || new Set<number>();
    if (!visited) dp.set(cur, visited);

    if (!stoneSet.has(next) || visited.has(unit)) return false;
    if (next === stones[stones.length - 1]) return true;

    dp.set(cur, visited.add(unit));
    return dfs(next, unit) || dfs(next, unit - 1) || dfs(next, unit + 1);
  }
  return dfs(stones[0], 1);
}
