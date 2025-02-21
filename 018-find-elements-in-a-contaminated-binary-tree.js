/*

Given a binary tree with the following rules:

root.val == 0
For any treeNode:
If treeNode.val has a value x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
If treeNode.val has a value x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

Implement the FindElements class:

FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
bool find(int target) Returns true if the target value exists in the recovered binary tree.

*/

class FindElements {
  constructor(root) {
    this.seen = new Set();
    this.recover(root, 0);
  }

  recover(node, val) {
    if (!node) return;
    node.val = val;
    this.seen.add(val);
    if (node.left) this.recover(node.left, 2 * val + 1);
    if (node.right) this.recover(node.right, 2 * val + 2);
  }

  find(target) {
    return this.seen.has(target);
  }
}
