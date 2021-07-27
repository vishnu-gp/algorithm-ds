/**
 * To return indices of elements of input array which adds up to target values. Returns indices as array or null
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {mixed}
 */
const findTwoSum = function (nums, target) {
    let inputLength = nums.length
    for (let i = 0; i < inputLength; i++) {
        const numberToFind = target - nums[i]
        for (let j = i + 1; j < inputLength; j++) {
            if (nums[j] == numberToFind)
                return [i, j]
        }
    }
    return null
}


// Driver code
let result
result = findTwoSum([1, 3, 7, 9, 2], 11)
//result = findTwoSum([1,3,7,9,2], 25)
//result = findTwoSum([], 7)
//result = findTwoSum([5], 5)
//result = findTwoSum([1,5], 6)
console.log(result)