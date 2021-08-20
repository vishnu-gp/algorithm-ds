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
 * @return {number[][]}
 */
const levelOrder = function (root) {
    if (!root)
        return []
    const result = []
    const queue = [root]
    while (queue.length) {
        let queueLength = queue.length, levelCount = 0
        const currentLevelResult = []

        while (levelCount < queueLength) {
            const node = queue.shift()
            currentLevelResult.push(node.val)
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)
            levelCount++
        }
        result.push(currentLevelResult)
    }

    return result
};