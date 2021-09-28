/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * To traverse tree in depth first manner
 * @param {TreeNode} node 
 * @param {number} level 
 * @param {number[]} result 
 * @returns 
 */
const dfs = function (node, level, result) {
    if (!node)
        return
    if (level >= result.length)
        result.push(node.val)
    level++
    if (node.right)
        dfs(node.right, level, result)
    if (node.left)
        dfs(node.left, level, result)
}

/**
 * To find right side view of the tree
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
    const result = []
    dfs(root, 0, result)

    return result
};
