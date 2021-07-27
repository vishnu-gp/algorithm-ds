/**
 * To return indices of elements of input array which adds upto target values. Returns indices as array or null
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {mixed}
 */
const findTwoSum = function (nums, target) {
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        const currentMapValue = hashMap[nums[i]]
        if (currentMapValue >= 0)
            return [currentMapValue, i]
        const numberToFind = target - nums[i]
        hashMap[numberToFind] = i
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