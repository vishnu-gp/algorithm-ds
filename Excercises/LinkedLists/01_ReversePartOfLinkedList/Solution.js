/**
 * To reverse the M,N subsection of a linked list
 * @param {} head
 * @param {number} m
 * @param {number} n
 * @return {}
 */
const reverseBetween = function (head, m, n) {
    let currentNode = head, currentNodePos = 1, start = head
    while (currentNodePos < m) {
        start = currentNode
        currentNode = currentNode.next
        currentNodePos++
    }
    let reversedList = null, end = currentNode
    while (currentNodePos >= m && currentNodePos <= n) {
        const nextNode = currentNode.next
        currentNode.next = reversedList
        reversedList = currentNode
        currentNode = nextNode
        currentNodePos++
    }
    start.next = reversedList
    end.next = currentNode
    if (m > 1)
        return head
    else
        return reversedList
}