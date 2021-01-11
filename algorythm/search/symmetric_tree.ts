/**
 * https://leetcode.com/problems/symmetric-tree/
 *
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetricBFS(root: TreeNode | null): boolean {
  if (!root) return true;

  function bfs(queue: Array<TreeNode | null>): boolean {
    while (queue.length > 0) {
      const [lNode, rNode] = [queue.shift(), queue.shift()];
      if (lNode === null && rNode === null) continue;
      if (lNode?.val !== rNode?.val) return false;
      queue.push(lNode.left, rNode.right, lNode.right, rNode.left);
    }
    return true;
  }
  return bfs([root, root]);
}

function isSymmetricDFS(root: TreeNode | null): boolean {
  if (!root) return true;

  function dfs(lNode: TreeNode | null, rNode: TreeNode | null): boolean {
    if (lNode === null && rNode === null) return true;
    if (lNode?.val !== rNode?.val) return false;
    return dfs(lNode.left, rNode.right) && dfs(lNode.right, rNode.left);
  }
  return dfs(root.left, root.right);
}
