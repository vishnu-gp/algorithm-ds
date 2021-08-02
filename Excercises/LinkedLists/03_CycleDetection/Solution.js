/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * To detect cycles in a linked list
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let currentNode = head
    const alreadySeen = new Set()
    if (currentNode === null)
        return null
    while (!alreadySeen.has(currentNode)) {
        if (currentNode.next === null)
            return null
        alreadySeen.add(currentNode)
        currentNode = currentNode.next
    }
    return currentNode
};