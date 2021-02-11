//https://leetcode.com/problems/maximum-depth-of-binary-tree/

//time O(N) space O(N)
function maxDepthDFS(root: TreeNode | null): number {
  return root
    ? 1 + Math.max(maxDepthDFS(root.left), maxDepthDFS(root.right))
    : 0;
}

function minDepthDFS(root: TreeNode | null): number {
  if (!root) return 0;
  const left = minDepthDFS(root.left);
  const right = minDepthDFS(root.right);
  return 1 + (Math.min(left, right) || left || right);
}

//time O(N) space O(N)
function maxDepthBFS(root: TreeNode | null): number {
  if (!root) return 0;
  let depth = 0;
  const queue = [{ node: root, level: 1 }];
  while (queue.length) {
    const { node, level } = queue.shift();
    depth = Math.max(depth, level);
    node.left && queue.push({ node: node.left, level: level + 1 });
    node.right && queue.push({ node: node.right, level: level + 1 });
  }
  return depth;
}

function minDepthBFS(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [{ node: root, level: 1 }];
  while (queue.length) {
    const { node, level } = queue.shift();
    if (!node.left && !node.right) return level;
    node.left && queue.push({ node: node.left, level: level + 1 });
    node.right && queue.push({ node: node.right, level: level + 1 });
  }
}
