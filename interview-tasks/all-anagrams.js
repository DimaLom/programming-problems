/**
 *
 * @param {string[]} array
 * @return {boolean}
 */

function allAnagrams(array) {
    const sorted = array.map(str => str.split('').sort().join())
    
    for (const str of sorted) {
        if (str !== sorted[0]) {
            return false
        }
    }
    
    return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false