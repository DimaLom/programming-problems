/**
 * @param {string[]} array
 * @return {string}
 */

function highestFrequency(array) {
    const cash = new Map()
    let max = { key: array[0], value: 0 };
    
    for (const str of array) {
        const cashed = cash.get(str)
        cash.set(str, cashed ? cashed + 1 : 1)
        
        if (cashed > max.value) {
            max.key = str
            max.value = cashed
        }
        
    }
    
    return max.key
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])) // -> ghi