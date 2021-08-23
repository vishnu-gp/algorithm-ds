/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
    if (!root)
        return []
    const result = []
    const queue = [root]
    while (queue.length) {
        let queueLength = queue.length, levelCount = 0, node
        while (levelCount < queueLength) {
            node = queue.shift()
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)
            levelCount++
        }
        result.push(node.val)
    }

    return result
};