/**
 *
 * @param {string} string
 * @return {boolean}
 */

function isBalanced(string) {
    const start = '({['
    const end = ')}]'
    
    const queue = []
    
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    
    for (const char of string) {
        if (start.includes(char)) {
            queue.push(char)
            continue;
        }
        if (end.includes(char)) {
            const last = queue.pop()
            if (brackets[char] !== last) {
                return false
            }
        }
    }
    
    return !queue.length
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
console.log(isBalanced(']123]')) // -> false