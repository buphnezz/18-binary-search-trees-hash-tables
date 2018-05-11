'use strict';

// Time O(n) where n is the number of nodes
// Space - (H) where H is the height of the tree
// const preOrderBstTraversal = (rootNode) => {
// root - left - right
// if (!rootNode) {
//   return undefined;
// }
// rootNode.value = 101;
// console.log(this);
// return rootNode;
// if (rootNode === nodeToRemove) {
//   if (!rootNode.left && !rootNode.right) {
//     rootNode.value = null;
//     return rootNode;
//   }
//  else if (!rootNode.right) {
//   rootNode.value = this._remove(rootNode.left, 'postOrderBstTraversal');
// } else if (!rootNode.left) {
//   rootNode.value = this._remove(rootNode.right, 'inOrderBstTraversal');
// }
// console.log('this.right', this.root.right);
// preOrderBstTraversal(rootNode.left);
// preOrderBstTraversal(rootNode.right);
// };

// Time O(n) where n is the number of nodes
// Space - (H) where H is the height of the tree
let inOrderSuccessor = null;
const postOrderBstTraversal = (rootNode) => {
  // left - right - root
  if (!rootNode) {
    return undefined;
  }
  postOrderBstTraversal(rootNode.left);
  postOrderBstTraversal(rootNode.right);

  return inOrderSuccessor;
};

// let inOrderBstStr = '';
const inOrderBstTraversal = (rootNode) => {
  // left - root - right=
  if (!rootNode) {
    return undefined;
  }
  inOrderBstTraversal(rootNode.left);

  // inOrderBstStr += `,${rootNode.value}`;
  if (!rootNode.left && !rootNode.right) {
    inOrderSuccessor = rootNode.value;
    rootNode.value = null; 
  } else if (!rootNode.left) {
    inOrderSuccessor = rootNode.value;
    rootNode.value = rootNode.right.value;
    if (rootNode.right.right) {
      rootNode.right = rootNode.right.right;
    } else {
      rootNode.right = null;
    }
  }

  inOrderBstTraversal(rootNode.right);
  // return inOrderBstStr.replace(/^,/, '');
  return inOrderSuccessor;
};

export { postOrderBstTraversal, inOrderBstTraversal };
