/**
 * @param {(string | number)[]} source
 * @param {(string | number)[]} subset
 * @return {boolean}
 */

function arraySubset(source, subset) {
    let cash;
    return subset.every((item) => {
        if (cash === item) {
            return false
        }
        const i = source.indexOf(item);
        
        cash = source[i]
        
        return i !== -1
    })
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 2, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false