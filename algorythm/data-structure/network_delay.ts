//https://leetcode.com/problems/network-delay-time/
//Bellman-Ford
//time O(VE) space O(V)

function networkDelayTime(times: number[][], n: number, k: number): number {
  const dist: number[] = Array(n + 1).fill(Infinity);
  [dist[0], dist[k]] = [0, 0];

  for (let i = 1; i < n; i++) {
    for (const [u, v, w] of times) {
      if (dist[u] !== Infinity && dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
      }
    }
  }

  const res = Math.max(...dist);
  return res === Infinity ? -1 : res;
}
