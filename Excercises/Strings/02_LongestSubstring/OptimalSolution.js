/**
 * To find the length of longest possible substring without repeating characters
 * 
 * @param {string} s
 * @return {number}
 */
const findLengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length
    let left = 0, longest = 0
    const cache = {}
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const lastSeenAt = cache[currentChar]
        if (lastSeenAt >= left)
            left = lastSeenAt + 1
        cache[currentChar] = right;
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}

// Driver code
let result
result = findLengthOfLongestSubstring("abccabb")
//result = findLengthOfLongestSubstring("ccccccccc")
//result = findLengthOfLongestSubstring("")
//result = findLengthOfLongestSubstring("a")
//result = findLengthOfLongestSubstring("au")
//result = findLengthOfLongestSubstring("abcbda")
console.log(result)