# Binary Search Tree

My implementation of the [binary search trees project](https://www.theodinproject.com/lessons/javascript-binary-search-trees) from [The Odin Project](https://www.theodinproject.com/).

## Features

-   `buildTree(array, start, end)` takes a sorted array with no duplicates, turns it into a balanced binary search tree full of node objects appropriately placed and then returns the level-0 root node.
-   `insert(value)` inserts `value` into the tree.
-   `deleteItem(value)` deletes `value` from the tree.
-   `find(value)` returns the node with `value`.
-   `levelOrder(callback)` iteratively traverses the tree in breadth-first level order and provides each node as an argument to `callback`. It returns an array of values if no callback is given as an argument and simply returns if the tree is empty.
-   `inOrder(callback)`, `preOrder(callback)` and `postOrder(callback)` traverse the tree in their respective depth-first order and yield each node to `callback`. Each returns an array of values if no callback is given as an argument or simply returns if the tree is empty.
-   `height(node)` returns `node`'s height, with height being defined as the number of edges in the longest path from a given node to a leaf node.
-   `depth(node)` returns `node`'s depth, with depth being defined as the number of edges in the path from a given node to the tree's root node.
-   `isBalanced()` checks if the tree is balanced, where a balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
-   `rebalance()` rebalances an unbalanced tree.
