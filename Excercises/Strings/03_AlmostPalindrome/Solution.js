/**
 * To check a string is palindrome
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isPalindrome = function (s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }

    return true
};

/**
 * To check a string is almost palindrone (is palindrome by deleting at most one character)
 * @param {string} s
 * @return {boolean}
 */
const validAlmostPalindrome = function (s) {
    let left = 0, right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
        }
        left++
        right--
    }

    return true
};


// Driver code
let result
result = validAlmostPalindrome("raceacar")
// result = validAlmostPalindrome("raceacar")
// result = validAlmostPalindrome("abcdefgaba")
// result = validAlmostPalindrome("")
// result = validAlmostPalindrome("a")
// result = validAlmostPalindrome("ab")
console.log(result)