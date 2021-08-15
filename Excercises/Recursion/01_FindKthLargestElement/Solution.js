/**
 * To swap elements of array
 * @param {number} a
 * @param {number} b
 * @param {number[]} nums
 */
const swap = function (a, b, nums) {
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
}

/** 
 * To partition an array with pivot
 * @param {number} start
 * @param {number} end
 * @param {number[]} nums
 */
const getPartition = function (start, end, nums) {
    let i = start, j = start
    while (j < end) {
        if (nums[j] < nums[end]) {
            swap(i, j, nums)
            i++
        }
        j++
    }
    swap(i, end, nums)

    return i;
}

/**
 * To quick select kth smallest element
 * @param {number} start
 * @param {number} end
 * @param {number[]} nums
 * @param {number} targetIndex
 */
const quickSelect = function (start, end, nums, targetIndex) {
    let partitionIndex = getPartition(start, end, nums)
    if (partitionIndex < targetIndex)
        return quickSelect(partitionIndex + 1, end, nums, targetIndex)
    else if (partitionIndex > targetIndex)
        return quickSelect(start, partitionIndex - 1, nums, targetIndex)
    else
        return nums[partitionIndex]
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
    const targetIndex = nums.length - k

    return quickSelect(0, nums.length - 1, nums, targetIndex)
};

// Driver code
let result
result = findKthLargest([3, 2, 1, 5, 6, 4], 2)
//result = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
console.log(result)