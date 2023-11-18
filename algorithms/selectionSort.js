// O(n*n)
const arr = [11, 1, 3, 4, 6, 8, 42, 2, 7, 5, 9, -1, -7, 13, 24, 57, -23, 0];

let count = 0;

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            count += 1;
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array
}

console.log(selectionSort(arr));
console.log(`count:`, count);