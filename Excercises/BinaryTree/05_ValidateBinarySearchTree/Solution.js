/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * To recursively check the tree is valid BST using DFS
 * @param {TreeNode} node
 * @param {number} min
 * @param {number} max
 */
const checkValidBST = function (node, min, max) {
    if (node.val <= min || node.val >= max)
        return false

    if (node.left)
        if (!checkValidBST(node.left, min, node.val))
            return false
    if (node.right)
        if (!checkValidBST(node.right, node.val, max))
            return false

    return true
};

/**
 * To validate BST
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
    if (root == null)
        return true
    return checkValidBST(root, -Infinity, Infinity)
};