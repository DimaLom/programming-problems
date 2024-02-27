/**
 * @param {string} str
 * @return {number}
 */

const findVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let char of str.toLocaleLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    
    return count;
}

/**
 * @param {string} str
 * @return {number}
 */

const findVowelsWithRegex = (str) => {
    const matches = str.toLocaleLowerCase().match(/[aeiou]/gi)
    return matches ? matches.length : 0
}


console.log(findVowelsWithRegex('hello'))
console.log(findVowelsWithRegex('why'))