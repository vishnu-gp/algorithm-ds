/**
 * To find the length of longest possible substring without repeating characters
 * 
 * @param {string} s
 * @return {number}
 */
const findLengthOfLongestSubstring = function (s) {
    const sL = s.length
    let longest = 0
    for (let i = 0; i < sL; i++) {
        let cache = {}
        let length = 1
        cache[s[i]] = 1;
        for (let j = i + 1; j < sL; j++) {
            if (cache[s[j]])
                break;
            length++
            cache[s[j]] = 1
        }
        longest = Math.max(longest, length)
    }
    return longest
}

// Driver code
let result
result = findLengthOfLongestSubstring("abccabb")
//result = findLengthOfLongestSubstring("ccccccccc")
//result = findLengthOfLongestSubstring("")
//result = findLengthOfLongestSubstring("a")
//result = findLengthOfLongestSubstring("abcbda")
console.log(result)