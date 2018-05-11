'use strict';

import { postOrderBstTraversal, inOrderBstTraversal } from './traversals-bst';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(nodeToInsert) { // Time: O(H) -> O(lg n), Space: O(H) -> O(lg n)
    if (!nodeToInsert) {
      return undefined;
    }
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
    return this;
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }

  remove(value) {
    if (!value) {
      return undefined;
    }
    const nodeToRemove = this.find(value);
    return this._remove(this.root, nodeToRemove);
  }
  
  _remove(rootNode, nodeToRemove) {
    if (!rootNode) {
      return null;
    }
    // -------------------------------LEFT NODE-----------------------------------------------------
    if (rootNode.left === nodeToRemove) { // LEFT NODE
      if (!rootNode.left.left && !rootNode.left.right) { // left leaf
        rootNode.left = null;
        return this;
      } else if (!rootNode.left.left) { // left node has right child only
        const rightTemp = rootNode.right.right;
        rootNode.right.right = null;
        rootNode.right = rightTemp;
      } else if (!rootNode.left.right) { // left node has left child only
        const leftTemp = rootNode.left.left;
        rootNode.left.left = null;
        rootNode.left = leftTemp;
      } else {

      }
      // else if (rootNode.left.left && rootNode.left.right) { // left node has 2 children.
      //   rootNode.value = rootNode.right.value;
      //   return this._remove(rootNode.right, nodeToRemove);
      // }
      // ---------------------------------RIGHT NODE------------------------------------------------
    } else if (rootNode.right === nodeToRemove) { // RIGHT NODE
      if (!rootNode.right.left && !rootNode.right.right) { // right leaf removal
        rootNode.right = null;
        return this;
      } else if (!rootNode.right.left) { // right node has right child only
        rootNode.right = rootNode.right.right;
        return this;
      // else if (!rootNode.right.right) { // right node has left child only
      //   const leftTemp = rootNode.right.left;
      //   rootNode.right.left = null;
      //   rootNode.right = leftTemp;
        // -------------------------RECURSIVE ACTIONS ----------------------------------------------
      } else if (rootNode.value < nodeToRemove.value) {
        return this._remove(rootNode.right, nodeToRemove);
      }
      return this._remove(rootNode.left, nodeToRemove);
    }
  }


  find(value) { // Time: O(H) -> O(lg n), Space: O(H) -> O(lg n)
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }
}

export default BinarySearchTree;
