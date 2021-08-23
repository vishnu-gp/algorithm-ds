/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * To find the max height of the tree
 * @param {TreeNode} root 
 * @return {number}
 */
const getMaxTreeHeight = function (root) {
    let height = 0;
    while (root.left !== null) {
        height++;
        root = root.left;
    }

    return height;
}

/**
 * To check wether node exists at the index
 * @param {number} index 
 * @param {number} height 
 * @param {TreeNode} node 
 * @return {boolean}
 */
const isNodeExists = function (index, height, node) {
    let left = 0, right = Math.pow(2, height) - 1, count = 0;
    while (count < height) {
        const midOfNode = Math.ceil((left + right) / 2);
        if (index >= midOfNode) {
            node = node.right;
            left = midOfNode;
        } else {
            node = node.left;
            right = midOfNode - 1;
        }
        count++;
    }

    return node !== null;
}

/**
 * To get the total number of nodes in O(logn) time complexity
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
    if (!root) return 0;

    const height = getMaxTreeHeight(root);

    if (height === 0) return 1;

    const upperTreeCount = Math.pow(2, height) - 1
    let left = 0, right = upperTreeCount;
    while (left < right) {
        const midIndex = Math.ceil((left + right) / 2);
        if (isNodeExists(midIndex, height, root)) {
            left = midIndex;
        } else {
            right = midIndex - 1;
        }
    }

    return upperTreeCount + left + 1;
};