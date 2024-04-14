import Node from './node.mjs';

// Assume integers as node values
class Tree {
    #processedArray;

    constructor(array) {
        this.#processedArray = this.#removeDuplicatesAndSort(array);
        this.root = this.buildTree(
            this.#processedArray,
            0,
            this.#processedArray.length - 1
        );
    }

    // Removes duplicates and sorts numbers in ascending order
    #removeDuplicatesAndSort(array) {
        return [...new Set(array)].toSorted((a, b) => a - b);
    }

    /**
     * Takes a sorted array with no duplicates and turns it into a balanced
     * binary search tree full of node objects appropriately placed.
     * Returns the level-0 root node.
     */
    buildTree(array, start, end) {
        // Base case
        if (start > end) return null;

        // Get the middle element of the array and make it root
        const middle = Math.floor((start + end) / 2);
        const root = new Node(array[middle]);

        // Recursively construct the left subtree and make it the left child of root
        root.left = this.buildTree(array, start, middle - 1);

        // Recursively construct the right subtree and make it the right child of root
        root.right = this.buildTree(array, middle + 1, end);

        return root;
    }

    // Helper function for the insert method
    #recursiveInsert(root, value) {
        // Tree is empty and/or we have found the place of insertion for value
        if (!root) {
            return new Node(value);
        }

        if (value < root.data) {
            root.left = this.#recursiveInsert(root.left, value);
        } else if (value > root.data) {
            root.right = this.#recursiveInsert(root.right, value);
        }
        return root;
    }

    // Inserts value into the binary search tree
    insert(value) {
        this.root = this.#recursiveInsert(this.root, value);
    }

    // Helper function for the deleteItem method
    #recursiveDelete(root, value) {
        if (!root) return null;
        if (value > root.data) {
            root.right = this.#recursiveDelete(root.right, value);
        } else if (value < root.data) {
            root.left = this.#recursiveDelete(root.left, value);
        } else {
            // Here, root refers to the node that is to be deleted

            // Handle cases where node to be deleted has no children or one child
            if (!root.left) return root.right;
            else if (!root.right) return root.left;

            /**
             * Node to be deleted has two children, we can replace it either with
             * the node with the largest value in the node to be deleted's left
             * subtree or with the node with the smallest value in the node to be
             * deleted's right subtree. We will use the latter.
             */
            let rightSmallest = root.right;
            while (rightSmallest.left) rightSmallest = rightSmallest.left;
            rightSmallest.left = root.left;
            return root.right;
        }
        return root;
    }

    // Deletes the given value from the tree
    deleteItem(value) {
        this.root = this.#recursiveDelete(this.root, value);
    }

    // Returns the node with the given value
    find(value) {
        let tmp = this.root;
        while (tmp) {
            if (value > tmp.data) {
                tmp = tmp.right;
            } else if (value < tmp.data) {
                tmp = tmp.left;
            } else {
                return tmp;
            }
        }
    }

    // Helper function for the print method
    #prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.#prettyPrint(
                node.right,
                `${prefix}${isLeft ? '│   ' : '    '}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.#prettyPrint(
                node.left,
                `${prefix}${isLeft ? '    ' : '│   '}`,
                true
            );
        }
    }

    // Will console.log the tree in a structured format
    print() {
        this.#prettyPrint(this.root);
    }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const myTree = new Tree(arr);
myTree.print();

export default Tree;
