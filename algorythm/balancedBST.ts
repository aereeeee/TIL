//https://leetcode.com/problems/balance-a-binary-search-tree/

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

function balanceBST(root: TreeNode | null): TreeNode | null {
    return createBST(inOrderSort(root))
};

function inOrderSort(root: TreeNode | null): number[] {
    return !root ? [] : [...inOrderSort(root.left), root.val, ...inOrderSort(root.right)];
}

function createBST(arr: number[]): TreeNode {
    if (!arr.length) return null;

    const mid = Math.floor(arr.length / 2);
    const root = new TreeNode(arr[mid]);
    root.left = createBST(arr.slice(0, mid));
    root.right = createBST(arr.slice(mid + 1));

    return root;
}

