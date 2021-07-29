/**
 * To return if the two typed out strings are same
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSameTypedString = function (s, t) {
    let sL = s.length - 1, tL = t.length - 1
    while (sL >= 0 || tL >= 0) {
        if (s[sL] === '#' || t[tL] === '#') {
            if (s[sL] === "#") {
                let back = 2
                while (back > 0) {
                    sL--;
                    back--;
                    if (s[sL] === "#")
                        back += 2
                }
            }
            if (t[tL] === "#") {
                let back = 2
                while (back > 0) {
                    tL--;
                    back--;
                    if (t[tL] === "#")
                        back += 2
                }
            }
        }
        else {
            if (s[sL] !== t[tL])
                return false
            else {
                sL--
                tL--
            }
        }
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