import { PriorityQueueWithHeap } from "./priority_queue";
//https://leetcode.com/problems/network-delay-time/

//Bellman-Ford
//time O(VE) space O(V)
function networkDelayTimeBF(times: number[][], n: number, k: number): number {
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

//Dijkstra
//can use list or matrix for graph
//list has better space time O(V+E) than matrix O(V^2)
class Graph {
  verticies: number;
  adjList: Map<number, { node: number; w: number }[]>;

  constructor(n: number) {
    this.verticies = n;
    this.adjList = new Map();
  }
  addVertex(v: number) {
    this.adjList.set(v, []);
  }
  addEdge(x: number, y: number, w: number) {
    this.adjList.get(x).push({ node: y, w });
  }
}

//time O(ElogV) space O(V+E)
function networkDelayTimeDijkstra(
  times: number[][],
  n: number,
  k: number
): number {
  const dist: number[] = Array(n + 1).fill(Infinity);
  [dist[0], dist[k]] = [0, 0];

  const pq = new PriorityQueueWithHeap<number>();
  pq.insert({ value: k, priority: 0 });

  const graph = new Graph(n);

  for (let i = 1; i <= n; i++) {
    graph.addVertex(i);
  }
  for (const [u, v, w] of times) {
    graph.addEdge(u, v, w);
  }

  while (!pq.isEmpty()) {
    const min = pq.pop();
    const current = min.value;
    const adjVerticies = graph.adjList.get(current);

    adjVerticies.forEach((next) => {
      const temp = dist[current] + next.w;
      if (temp < dist[next.node]) {
        dist[next.node] = temp;
        pq.insert({ value: next.node, priority: dist[next.node] });
      }
    });
  }

  const res = Math.max(...dist);
  return res === Infinity ? -1 : res;
}
