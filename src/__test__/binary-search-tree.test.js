'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';

describe('binary-search-tree.test.js', () => {
  describe('#INSERT', () => {
    const bst = new BinarySearchTree();
    test('#insert, should insert first value at tree root if empty.', () => {
      bst.insert(new Node(10));
      expect(bst.root.value).toEqual(10);
    });
    test('#insert, should be able to insert multiple values correctly.', () => {
      bst.insert(new Node(15));
      bst.insert(new Node(8));
      bst.insert(new Node(16));
      expect(bst.root.right.value).toEqual(15);
      expect(bst.root.left.value).toEqual(8);
      expect(bst.root.right.right.value).toEqual(16);      
    });
    test('#insert, should return null if tree is empty.', () => {
      expect(bst.insert()).toBeUndefined();  
    });
  });
  describe('#FIND', () => {
    const bst2 = new BinarySearchTree();
    bst2.insert(new Node(11));
    bst2.insert(new Node(17));    
    bst2.insert(new Node(16));
    bst2.insert(new Node(9));
    bst2.insert(new Node(17));
    test('#find, should return the first node with the selected value in the bst.', () => {
      expect(bst2.find(17).value).toEqual(17);
      expect(bst2.find(17).left.value).toEqual(16);
      expect(bst2.find(17).right.value).toEqual(17); 
    });
    test('#find, should return null if the value is not in the bst.', () => {
      expect(bst2.find(30)).toBeNull();   
    });
    test('#find, should return null if tree is empty.', () => {
      const emptyBst2 = new BinarySearchTree();
      expect(emptyBst2.find(1)).toBeNull(); 
    });
  });
});
