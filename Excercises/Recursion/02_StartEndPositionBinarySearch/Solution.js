/**
 * To do binary search on input array
 * @param {number} start 
 * @param {number} end 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number} 
 */
const binarySearch = function (start, end, nums, target) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (nums[mid] < target)
            return binarySearch(mid + 1, end, nums, target)
        else if (nums[mid] > target)
            return binarySearch(start, mid - 1, nums, target)
        else
            return mid
    }

    return -1
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    let position = binarySearch(0, nums.length - 1, nums, target)
    if (position == -1)
        return [-1, -1]
    // Find first occurance
    let startPosition = position, finalStartPosition = position
    while (startPosition != -1) {
        startPosition = binarySearch(0, --startPosition, nums, target)
        if (startPosition != -1)
            finalStartPosition = startPosition
    }
    // Find last occurance
    let endPosition = position, finalEndPosition = position
    while (endPosition != -1) {
        endPosition = binarySearch(++endPosition, nums.length - 1, nums, target)
        if (endPosition != -1)
            finalEndPosition = endPosition
    }

    return [finalStartPosition, finalEndPosition]
};

// Driver code
let result
result = searchRange([5, 7, 7, 8, 8, 10], 8)
//result = searchRange([5, 7, 7, 8, 8, 10], 6)
//result = searchRange([], 0)
console.log(result)