/**
 * @param {string} str
 * @return {string}
 */

const removeDupes = (str) => [...new Set(str)].join('')

console.log(removeDupes('abcd')) // 'abcd'
console.log(removeDupes('aabbccdd')) // 'abcd'
console.log(removeDupes('abcddbca')) // 'abcd'
console.log(removeDupes('abababcdcdcd')) // 'abcd'