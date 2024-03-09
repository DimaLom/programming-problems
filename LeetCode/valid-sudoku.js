/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const size = board.length;
    
    const rows = new Array(size);
    const cols = new Array(size);
    const square = new Array(size);
    
    for (let i = 0; i < size; i++) {
        rows[i] = new Set();
        cols[i] = new Set();
        square[i] = new Set();
    }
    
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const value = board[row][col];
            if(value === '.') { continue; }
            
            const sqr = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            
            if(
                rows[row]?.has(value) ||
                cols[col]?.has(value) ||
                square[sqr].has(value)) {
                return false;
            }
            
            rows[row].add(value);
            cols[col].add(value);
            square[sqr].add(value);
        }
    }
    
    return true;
};

console.log(isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
])); // -> true

console.log(isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
])); // -> false