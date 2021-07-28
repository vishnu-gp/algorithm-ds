/**
 * To get max trapped rainwater between blocks
 * 
 * @param {number[]}
 * @return {number}
 */
const getTrappedRainWater = function (heights) {
    const heightsLength = heights.length
    let total = 0
    let leftMax = 0
    for (let i = 1; i < heightsLength - 1; i++) {
        let rightMax = 0
        leftMax = Math.max(leftMax, heights[i - 1])
        for (let j = i + 1; j < heightsLength; j++) {
            rightMax = Math.max(rightMax, heights[j])
        }
        const currentValue = Math.min(leftMax, rightMax) - heights[i]
        if (currentValue > 0)
            total += currentValue
    }

    return total
}

// Driver code

let result
result = getTrappedRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])
//result = getTrappedRainWater([])
//result = getTrappedRainWater([3])
//result = getTrappedRainWater([3,4,3])
console.log(result)