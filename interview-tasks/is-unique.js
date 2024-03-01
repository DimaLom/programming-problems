/**
 * @param {string} str
 * @return {boolean}
 */

const isUnique = (str) => new Set(str).size === str.length

console.log(isUnique('abcdef')) // true
console.log(isUnique('123456')) // true
console.log(isUnique('abcABC')) // true
console.log(isUnique('abcadef')) // false