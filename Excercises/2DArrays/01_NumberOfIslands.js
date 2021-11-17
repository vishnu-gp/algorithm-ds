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
 * @param {character[][]} grid
 * @return {number}
 */
numIslands = function (grid) {
    let numIslands = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                numIslands++
                grid[i][j] = 0
                const queue = [[i, j]]
                // BFS to mark same island as water
                while (queue.length) {
                    const currentIndex = queue.shift()
                    const currentRow = currentIndex[0]
                    const currentCol = currentIndex[1]
                    for (let k = 0; k < moves.length; k++) {
                        const currentDir = moves[k]
                        const targetRow = currentRow + currentDir[0]
                        const targetCol = currentCol + currentDir[1]

                        if (targetRow < 0 || targetRow >= grid.length || targetCol < 0 || targetCol >= grid[0].length || grid[targetRow][targetCol] == 0) {
                            continue
                        }
                        queue.push([targetRow, targetCol])
                        grid[targetRow][targetCol] = 0
                    }
                }
            }
        }
    }

    return numIslands
};