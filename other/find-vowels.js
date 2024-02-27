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


console.log(findVowels('hello'))
console.log(findVowels('why'))