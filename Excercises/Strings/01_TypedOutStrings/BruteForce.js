/**
 * To generate string from typed string
 * 
 * @param {string} s
 * @return {string}
 */
const generateString = function (s) {
    const generatedString = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '#')
            generatedString.pop()
        else
            generatedString.push(s[i])
    }

    return generatedString
}

/**
 * To return if the two typed out strings are same
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSameTypedString = function (s, t) {
    const sGenerated = generateString(s)
    const tGenerated = generateString(t)
    if (sGenerated.length != tGenerated.length)
        return false;
    for (let i = 0; i < sGenerated.length; i++) {
        if (sGenerated[i] != tGenerated[i])
            return false
    }
    return true
}

// Driver code
let result
result = isSameTypedString("abcd#d", "abct#d")
//result = isSameTypedString("abc#d", "acc#c")
//result = isSameTypedString("x#y#z#","a#")
//result = isSameTypedString("a###b", "b")
//result = isSameTypedString("Ab#t", "ab#z")
console.log(result)