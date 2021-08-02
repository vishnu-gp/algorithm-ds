/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * To flatten multi level doubly linked list
 * @param {Node} head
 * @return {Node}
 */
const flatten = function (head) {
    let currentNode = head, level = 0
    const tail = {}
    while (currentNode) {
        if (currentNode.child) {
            tail[level] = currentNode.next
            currentNode.next = currentNode.child
            currentNode.child = null
            currentNode.next.prev = currentNode
            level++
        }
        if (!currentNode.next && level) {
            currentNode.next = tail[--level]
            if (currentNode.next)
                currentNode.next.prev = currentNode
            else
                currentNode = currentNode.prev
        }
        currentNode = currentNode.next

    }

    return head
};