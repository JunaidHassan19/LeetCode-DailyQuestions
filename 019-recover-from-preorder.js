/*

We run a preorder depth-first search (DFS) on the root of a binary tree.

At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.  If the depth of a node is D, the depth of its immediate child is D + 1.  The depth of the root node is 0.

If a node has only one child, that child is guaranteed to be the left child.

Given the output traversal of this traversal, recover the tree and return its root.

 

*/

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function recoverFromPreorder(traversal) {
  let pos = 0;

  function parseNode(depth) {
    let start = pos;
    let dashCount = 0;

    while (pos < traversal.length && traversal[pos] === '-') {
      dashCount++;
      pos++;
    }

    if (dashCount !== depth) {
      pos = start; 
      return null;
    }

    let num = 0;
    while (pos < traversal.length && /[0-9]/.test(traversal[pos])) {
      num = num * 10 + parseInt(traversal[pos]);
      pos++;
    }

    let node = new TreeNode(num);
    
    node.left = parseNode(depth + 1);
    node.right = parseNode(depth + 1);
    return node;
  }
  
  return parseNode(0);
}