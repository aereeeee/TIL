/**
 * https://leetcode.com/problems/validate-binary-search-tree
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function isValidBST(root: TreeNode | null): boolean {
  function validate(root: TreeNode | null, min: number, max: number) {
    if (!root) return true;
    if (min >= root.val || max <= root.val) return false;
    return (
      validate(root.left, min, root.val) && validate(root.right, root.val, max)
    );
  }
  return validate(root, -Infinity, Infinity);
}
