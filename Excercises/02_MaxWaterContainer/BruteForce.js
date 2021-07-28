/**
 * To return the max area that can be formed by the height walls in the array
 * 
 * @param {number[]} heights
 * @return {number}
 */
const findMaxWaterContainer = function (heights) {
    const heightsLength = heights.length
    let maxArea = 0;
    for (let i = 0; i < heightsLength; i++) {
        for (let j = i + 1; j < heightsLength; j++) {
            const area = Math.min(heights[i], heights[j]) * (j - i)
            maxArea = Math.max(maxArea, area)
        }
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