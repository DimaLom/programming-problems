/**
 * @param {string} str
 * @return {boolean}
 */

const palindrome = (str) => {
    const value = str.toLocaleLowerCase()
    
    return value === value.split('').reverse().join('')
}
