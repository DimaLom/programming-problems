// O(log2n*n)
const arr = [11, 1, 3, 4, 6, 8, 42, 2, 7, 5, 9, -1, -7, 13, 24, 57, -23, 0];

let count = 0;
// Hoare's sort
const quickSort = (array) => {
    if (array.length <= 1) return array;
    
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    
    const less = [];
    const greater = [];
    
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr));
console.log(`count:`, count);