// O(log2n) if array is sorted
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let count = 0;

const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let position = -1;
    
    while (position === -1 && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1
        }
    }
    return position;
}

const recursiveBinarySearch = (array, item, start = 0, end = array.length) => {
    const middle = Math.floor((start + end) / 2);
    count += 1;
    if (item === array[middle]) {
        return middle;
    }
    
    return item < array[middle]
        ? recursiveBinarySearch(array, item, start, middle - 1)
        : recursiveBinarySearch(array, item, middle + 1, end);
}

console.log(recursiveBinarySearch(arr, 9));
console.log(`count:`, count);