const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

/**
 *
 * @param {number[][]} source
 * @return {number[][]}
 */

function rotate(source) {
    let result = source[0].map(() => [])
    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].length; j++) {
            result[j][source.length - (1 + i)] = source[i][j]
        }
    }
    return result
}

function rotate180(source) {
    return rotate(rotate(source))
}

function rotate270(source) {
    return rotate180(rotate(source))
}

console.log(rotate(matrix))
console.log(rotate180(matrix))
console.log(rotate270(matrix))