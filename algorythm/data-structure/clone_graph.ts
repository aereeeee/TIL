/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) return null;
  const map = new Map();
  const clone = (root: GraphNode): GraphNode => {
    if (!map.has(root.val)) {
      map.set(root.val, new GraphNode(root.val));
      map.get(root.val).neighbors = root.neighbors.map(clone);
    }
    return map.get(root.val);
  };
  return clone(node);
}
