'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  construct(root) {
    this.root = root;
  }

  breadthFirstTraversal() { // Time: O(n), Space: O(n)
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) {
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;
    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      // TODO: the following line will be replaced with any other operation
      console.log(`Visiting ${currentNode.value}`);
      console.log(this);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }
}
