const maxOperations = (nums: number[], k: number): number => {
    if (!nums.length) return 0;
    let operationsCount = 0;
    
    console.log('count', operationsCount)
    
    const numbers = [...nums];
    const difference = k - numbers[0];
    const termIndex = numbers.findIndex((num, index) => num === difference && index !== 0);
    console.log(numbers)
    if (termIndex !== -1) {
        operationsCount += 1;
        numbers.splice(termIndex, 1);
    }
    
    numbers.splice(0, 1);
    
    maxOperations(numbers, k);
    
    return operationsCount;
}


// console.log('result k = 6 ==', maxOperations([3, 1, 3, 4, 3], 6));
// console.log('result k = 5 == ', maxOperations([1, 2, 3, 4], 5));
console.log('result k = 10 == ', maxOperations([5, 5, 1, 3, 7, 9, 2, 4, 3, 8], 10));