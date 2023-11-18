// O(n)
const arr = [1, 3, 4, 6, 8, 42, 2, 7, 5, 9];

let count = 0;

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(arr, 42));
console.log(`count:`, count);