/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        }
        else if (s[i] === ')') {
            if (!stack.length) {
                s = s.slice(0, i) + s.slice(i + 1)
                i--
            }
            else
                stack.pop()
        }
    }
    while (stack.length) {
        let i = stack.pop()
        s = s.slice(0, i) + s.slice(i + 1)
    }

    return s
};

// Driver code
let result
result = minRemoveToMakeValid("a)bc(d)")
//result = minRemoveToMakeValid("(ab(c)d")
//result = minRemoveToMakeValid("))((")
console.log(result)