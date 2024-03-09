/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const size = 9;
    
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