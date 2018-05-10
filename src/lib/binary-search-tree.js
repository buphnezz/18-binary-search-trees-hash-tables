'use strict';

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

  // remove(nodeToRemove) {
    
  // }

  // _remove() {

  // }

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
