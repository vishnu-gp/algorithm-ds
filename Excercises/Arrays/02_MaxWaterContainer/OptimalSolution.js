/**
 * To return the max area that can be formed by the height walls in the array
 * 
 * @param {number[]} heights
 * @return {number}
 */
const findMaxWaterContainer = function (heights) {
    let maxArea = 0;
    let start = 0;
    let end = heights.length - 1
    while (end > start) {
        const height = Math.min(heights[start], heights[end])
        const width = end - start
        const area = height * width
        maxArea = Math.max(maxArea, area)
        if (heights[start] <= heights[end])
            start++
        else
            end--
    }

    return maxArea
}

// Driver code

let result
result = findMaxWaterContainer([7, 1, 2, 3, 9])
//result = findMaxWaterContainer([])
//result = findMaxWaterContainer([5])
//result = findMaxWaterContainer([6,9,3,4,5,8])
console.log(result)