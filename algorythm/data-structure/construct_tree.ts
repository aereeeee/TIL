// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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

// time O(NlogN) Array.indexOf causes logN
// space O(NlogN) Array.slice casues logN
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!inorder.length) return null;

  const root: TreeNode = new TreeNode(preorder.shift());
  const index: number = inorder.indexOf(root.val);

  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));

  return root;
}
