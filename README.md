## Authors
Daniel Shelton and Zachary Schumpert

## Overview
This application demonstrates the process of traversing through a BinarySearchTree and KAry Tree.  The application also provides examples of how the inserting, removing and finding of values and nodes within each tree are handled. 

## Getting Started

The following npm install should occur before attempting to run this application:

[npm install -D babel-register babel-preset-env babel-eslint eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest jest]

Also, install these packages before running the application:

[npm i winston@next dotenv faker]

Install Mongodb and start your mongodb server before running the application.

The last thing to do is create your own binary-tree.js, node.js, create a traversals.js module that contains methods for preOrder, inOrder and postOrder traversal.  You will also need to create a kary-tree.js module and kary-node.js module.  Please import/export each module appropriately so the connections between each module can be made successfully.

## Accessing Each Method
1.The `remove(value)` method is found within the BinarySearchTree class and will search for and remove a specific value when called.
2.The `find(value)` & `_find(value)` will iterate over all child nodes using a breath-first traversal and return the first node that has that value, it will return null if a node with the value is not found
3.The `insert()` & `_insert()` methods will insert a node into the BinarySearchTree when called.
4.The `toString(str)` iterates over all child nodes using a breath-first traversal and concatenates their values separated by newlines in to a string.
5.The `toArray(array)` uses a depth-first traversal and will push all the tree's elements into an array.

## Big 0
remove() method should have the following BigO:
  BigO Time: O(H)
  BigO Space: O(H)
toString() method should have the following BigO:
  BigO Time: O(H)
  BigO Space: O(H)
toArray() method should have the following BigO:
  BigO Time: O(H)
  BigO Space: O(H2)
find() method should have the following BigO: 
 BigO Time: O(H) where H is the height of the tree
 BigO Space: O(1) 

## DO NOT FORGET
Ensure your .env module is ignored within your .gitnore for your safety! 
