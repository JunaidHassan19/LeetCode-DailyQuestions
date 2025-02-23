/*

Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.

If there exist multiple answers, you can return any of them.

*/


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function constructFromPrePost(preorder, postorder) {
  if (preorder.length === 0) return null;
  
  const root = new TreeNode(preorder[0]);
  
  if (preorder.length === 1) return root;
  
  const leftRootVal = preorder[1];
  
  const L = postorder.indexOf(leftRootVal);
  const leftSize = L + 1;
  
  root.left = constructFromPrePost(preorder.slice(1, leftSize + 1), postorder.slice(0, leftSize));
  root.right = constructFromPrePost(preorder.slice(leftSize + 1), postorder.slice(leftSize, postorder.length - 1));
  
  return root;
}
