/**
 * @param {string} str
 * @return {object}
 */

const generateDictFromString = (str) => {
    const dict = {}
    
    for (const char of str) {
        dict[char] = dict[char] ? dict[char] + 1 : 1
    }
    
    return dict
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (!s || !t || s.length !== t.length) return false
    
    const sDict = generateDictFromString(s)
    const tDict = generateDictFromString(t)
    
    return Object.entries(sDict).every(([key, value]) => tDict[key] === value)
};

console.log('"anagram", "naragma"', isAnagram("anagram", "naragma")) // true
console.log('"a", "ab"', isAnagram("a", "ab")) // false
console.log('"ba", "ab"', isAnagram("ba", "ab")) // true
console.log('"", ""', isAnagram("", "")) // false
console.log('"", "ab"', isAnagram("", "ab")) // false
console.log('"a", ""', isAnagram("a", "")) // false
console.log('"bar", "car"', isAnagram("bar", "car")) //false
console.log('"var", "rav"', isAnagram("var", "rav")) // true
console.log('"varv", "rav"', isAnagram("varv", "rav")) // false
console.log(isAnagram()) // false

