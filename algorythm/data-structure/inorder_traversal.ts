//https://leetcode.com/problems/binary-tree-inorder-traversal/

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

//recursive
//time O(N)  space O(N) -> call stack
function inorderTraversalRecur(root: TreeNode | null): number[] {
  return !root
    ? []
    : [
        ...inorderTraversalRecur(root.left),
        root.val,
        ...inorderTraversalRecur(root.right),
      ];
}

//iterative
//time O(N)  space O(N)
function inorderTraversalStack(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: TreeNode[] = [root];
  const res: number[] = [];

  while (stack.length) {
    const item = stack.pop();
    if (item.left) {
      stack.push(item);
      stack.push(item.left);
      item.left = null;
    } else {
      res.push(item.val);
      item.right && stack.push(item.right);
    }
  }
  return res;
}
