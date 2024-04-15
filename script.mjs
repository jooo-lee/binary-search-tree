import Tree from './tree.mjs';

// Returns an array of random numbers < 100 that has length arrayLen
const getArrayOfRandomNums = (arrayLen) => {
    const array = [];
    for (let i = 0; i < arrayLen; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
};

const runDriverScript = () => {
    // Create a BST from an array of random numbers < 100
    console.log('Creating BST...');
    const array = getArrayOfRandomNums(8);
    const tree = new Tree(array);
    tree.print();

    // Confirm that the tree is balanced
    console.log(`Balanced: ${tree.isBalanced()}`);

    // Print out all elements in level, pre, post and in order
    console.log(`Level order: ${tree.levelOrder()}`);
    console.log(`Preorder: ${tree.preOrder()}`);
    console.log(`Postorder: ${tree.postOrder()}`);
    console.log(`Inorder: ${tree.inOrder()}`);
    console.log('----------------------------------------------------------');

    // Unbalance the tree by adding several number > 100
    console.log('Unbalancing tree...');
    tree.insert(501);
    tree.insert(210);
    tree.insert(999);
    tree.insert(102);
    tree.insert(2024);
    tree.print();

    // Confirm that the tree is unbalanced
    console.log(`Balanced: ${tree.isBalanced()}`);
    console.log('----------------------------------------------------------');

    // Balance the tree
    console.log('Rebalancing tree...');
    tree.rebalance();
    tree.print();

    // Confirm that the tree is balanced again
    console.log(`Balanced: ${tree.isBalanced()}`);

    // Print out all elements in level, pre, post and in order
    console.log(`Level order: ${tree.levelOrder()}`);
    console.log(`Preorder: ${tree.preOrder()}`);
    console.log(`Postorder: ${tree.postOrder()}`);
    console.log(`Inorder: ${tree.inOrder()}`);
};

runDriverScript();
