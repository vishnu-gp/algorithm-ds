/**
 * To get max trapped rainwater between blocks
 * 
 * @param {number[]}
 * @return {number}
 */
const getTrappedRainWater = function (heights) {
    let left = 0, right = heights.length - 1, totalWater = 0, leftMax = 0, rightMax = 0

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (leftMax > heights[left])
                totalWater += leftMax - heights[left]
            else
                leftMax = heights[left]
            left++
        }
        else {
            if (rightMax > heights[right])
                totalWater += rightMax - heights[right]
            else
                rightMax = heights[right]
            right--
        }
    }

    return totalWater
}

// Driver code

let result
result = getTrappedRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])
//result = getTrappedRainWater([])
//result = getTrappedRainWater([3])
//result = getTrappedRainWater([3,4,3])
console.log(result)