'use strict';

import Node from '../lib/node';
import BinaryTree from '../lib/binary-tree';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '../lib/traversals';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const tree = new BinaryTree(one);
one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

describe('binary-tree.test.js', () => {
  describe('inOrderTraversal', () => {
    test('#InOrder, should return a string of the visited notes.', () => {
      expect(inOrderTraversal(tree.root)).toEqual('6,8,7,9,2,1,4,3,5');
    });
    test('#inOrder, should return a string.', () => {
      expect(typeof inOrderTraversal(tree.root)).toEqual('string');
    });
    test('#inOrder, should return undefined for an empty tree.', () => {
      const emptyTree = new BinaryTree();
      expect(inOrderTraversal(emptyTree.root)).toBeUndefined();
    });
  });
  describe('preOrderTraversal', () => {
    test('#preOrder, should return a string of the visited notes.', () => {
      expect(preOrderTraversal(tree.root)).toEqual('1,2,6,7,8,9,3,4,5');
    });
    test('#preOrder, should return a string.', () => {
      expect(typeof preOrderTraversal(tree.root)).toEqual('string');
    });
    test('#preOrder, should return undefined for an empty tree.', () => {
      const emptyTree2 = new BinaryTree();
      expect(preOrderTraversal(emptyTree2.root)).toBeUndefined();
    });
  });
  describe('postOrderTraversal', () => {
    test('#postOrder, should return a string of the visited notes.', () => {
      expect(postOrderTraversal(tree.root)).toEqual('8,9,7,6,2,4,5,3,1');
    });
    test('#postOrder, should return a string.', () => {
      expect(typeof postOrderTraversal(tree.root)).toEqual('string');
    });
    test('#postOrder, should return undefined for an empty tree.', () => {
      const emptyTree2 = new BinaryTree();
      expect(postOrderTraversal(emptyTree2.root)).toBeUndefined();
    });
  });
});
