// O(n*n)
const arr = [11, 1, 3, 4, 6, 8, 42, 2, 7, 5, 9, -1, -7, 13, 24, 57, -23, 0];

let count = 0;

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
            count += 1;
        }
    }
    return array
}

console.log(bubbleSort(arr));
console.log(`count:`, count);