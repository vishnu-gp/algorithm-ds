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
    let tortoise = head, hare = head

    while (true) {
        if (hare == null || hare.next === null || hare.next.next == null)
            return null
        hare = hare.next.next
        tortoise = tortoise.next
        if (hare == tortoise)
            break
    }

    hare = head
    while (hare !== tortoise) {
        hare = hare.next
        tortoise = tortoise.next
    }

    return hare
};