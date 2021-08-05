/**
 * To check string contains valid parentheses
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const p = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (p[s[i]])
            stack.push(s[i])
        else if (p[stack.pop()] !== s[i])
            return false
    }
    return stack.length === 0
}