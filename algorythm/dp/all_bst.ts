//https://leetcode.com/problems/unique-binary-search-trees-ii/
//top-down dp

/**
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

function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [];
  const dp = new Map();

  function build(start, end) {
    if (start > end) return [null];
    if (start === end) return [new TreeNode(start)];

    const key = `${start}_${end}`;
    if (dp.has(key)) return dp.get(key);

    const res = [];
    for (let i = start; i <= end; i++) {
      const leftTrees = build(start, i - 1);
      const rightTrees = build(i + 1, end);

      for (const leftTree of leftTrees) {
        for (const rightTree of rightTrees) {
          res.push(new TreeNode(i, leftTree, rightTree));
        }
      }
    }
    dp.set(key, res);
    return res;
  }
  return build(1, n);
}
