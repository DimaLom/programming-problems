const limits = [[0, 2], [3, 5], [6, 8]];

const between = (x, min, max) => x >= min && x <= max;
const findLimits = (x) => limits.find(([s, e]) => between(x, s, e));

const getAreaCoordinates = (x, y) => {
    const lx = findLimits(x);
    const ly = findLimits(y);
    
    return { lx, ly };
};

/**
 * @param {string[][]} board
 * @return {boolean}
 */

function isValidSudoku(board) {
    const map = new Map();
    
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            const current = board[y][x];
            if(!/\d/.test(current)) {
                continue;
            }
            
            const coordinates = map.get(current);
            const { lx, ly } = getAreaCoordinates(x, y);
            
            const hasDuplicate = coordinates?.some(([cx, cy]) => cx === x || cy === y || (
                between(cx, lx[0], lx[1]) && between(cy, ly[0], ly[1])
            ));
            
            if(hasDuplicate) {
                return false;
            }
            
            map.set(current, coordinates ? [...coordinates, [x, y]] : [[x, y]]);
        }
    }
    return true;
}

console.log(isValidSudoku(
    [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]),
);
