/**
 * @param {(string | number | number[])[]} arr
 * @return {(string | number)[]}
 */

const flatten = (arr) => arr.flatMap(el => Array.isArray(el) ? flatten(el) : el)

console.log(flatten([[1], [[2, 3]], [[[4]]]]))