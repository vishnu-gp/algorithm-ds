/**
 * To store moves
 */
const moves = [
    [-1, 0], // Up
    [0, 1], // Right
    [0, -1], // Left
    [1, 0] // Down
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
    let freshOranges = 0
    const rottingOrangeQueue = []
    // Scan and find fresh orange count and rotting orange coordinates
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1)
                freshOranges++
            else if (grid[i][j] == 2)
                rottingOrangeQueue.push([i, j])
        }
    }
    // No fresh oranges to rot
    if (freshOranges == 0)
        return 0

    // BFS with depth count to figure out minutes to rot
    let queueLength = rottingOrangeQueue.length
    let minsPassed = 0
    while (rottingOrangeQueue.length) {
        // BFS level count | Minute pass
        if (queueLength === 0) {
            minsPassed++
            queueLength = rottingOrangeQueue.length
        }
        const currentIndex = rottingOrangeQueue.shift()
        queueLength--
        const currentRow = currentIndex[0]
        const currentCol = currentIndex[1]
        for (let i = 0; i < moves.length; i++) {
            const currentDir = moves[i]
            const targetRow = currentRow + currentDir[0]
            const targetCol = currentCol + currentDir[1]

            if (targetRow < 0 || targetRow >= grid.length || targetCol < 0 || targetCol >= grid[0].length) {
                continue
            }
            if (grid[targetRow][targetCol] == 1) {
                rottingOrangeQueue.push([targetRow, targetCol])
                grid[targetRow][targetCol] = 2
                freshOranges--
            }
        }
    }

    if (freshOranges != 0)
        return -1
    return minsPassed
};