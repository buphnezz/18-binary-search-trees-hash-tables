'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';

describe('binary-search-tree.test.js', () => {
  describe('INSERT METHOD', () => {
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

  describe('FIND METHOD', () => {
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

  describe('REMOVE METHOD', () => {
    const bst3 = new BinarySearchTree();
    bst3.insert(new Node(10));
    bst3.insert(new Node(6));    
    bst3.insert(new Node(15));
    bst3.insert(new Node(11));
    bst3.insert(new Node(20));
    bst3.insert(new Node(3));
    bst3.insert(new Node(7));
    bst3.insert(new Node(2));
    bst3.insert(new Node(4));
    bst3.insert(new Node(5));
    bst3.insert(new Node(7));
    
    test('#remove, if target node is a left leaf, should remove node by parents child property. ', () => {
      bst3.remove(11);
      expect(bst3.root.right.left).toBeNull();
      expect(bst3.root.right.right.value).toEqual(20);
      bst3.insert(new Node(11));
    });
    test('#remove, if target node is a right leaf, should remove node by parents child property. ', () => {
      bst3.remove(20);
      expect(bst3.root.right.left.value).toEqual(11);
      expect(bst3.root.right.right).toBeNull();
      bst3.insert(new Node(20));
    });
    test('#remove, if target node has only a right child, target node should equal its right child.', () => {
      bst3.insert(new Node(25));
      bst3.remove(20);
      expect(bst3.root.right.right.value).toEqual(25);
      expect(bst3.root.right.right.right).toBeNull();
      bst3.remove(25);      
      bst3.insert(new Node(20));
    });
    test('#remove, if target node has only a left child, target node should equal its left child. ', () => {
      bst3.insert(new Node(1));
      bst3.remove(2);
      expect(bst3.root.left.left.left.value).toEqual(1);
      expect(bst3.root.left.left.left.left).toBeNull();
    });
    test('#remove, if right-target node has two children, right-target node should equal its right child. ', () => {
      bst3.remove(15);
      expect(bst3.root.right.value).toEqual(11);
      expect(bst3.root.right.right.right).toBeNull();
    });
    test('#remove, if left-target node has two children, left-target node should equal its right child. ', () => {
      bst3.remove(6);
      expect(bst3.root.left.value).toEqual(7);
      expect(bst3.root.left.right.right.right).toBeNull();
      bst3.insert(6);
    });
    test('#remove, should return null if tree is empty.', () => {
      const emptyBst3 = new BinarySearchTree();
      expect(emptyBst3.remove()).toBeUndefined();
    });
  });
});
