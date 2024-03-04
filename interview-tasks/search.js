/**
 *
 * @param {number[]} array
 * @param {number} target
 * @return {number}
 */

function search(array, target) {
    let start = 0;
    let end = array.length - 1
    let middle
    let position = -1
    
    while (position === -1 && start <= end) {
        middle = Math.floor((start + end) / 2)
        
        if (array[middle] === target) {
            position = middle
        }
        
        if (array[middle] < target) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return position
}

console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
console.log(search([1, 3, 6, 13, 17], 12)) // -> -1