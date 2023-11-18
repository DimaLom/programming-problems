const maxOperations = (nums, k) => {
    if (!nums.length) return 0;
    let operationsCount = 0;
    
    const numbers = [...nums];
    const difference = k - numbers[0];
    const termIndex = numbers.findIndex(
        (num, index) => num === difference && index !== 0
    );
    
    if (termIndex !== -1) {
        operationsCount += 1;
        numbers.splice(termIndex, 1);
    }
    
    numbers.splice(0, 1);
    
    maxOperations(numbers, k);
    
    return operationsCount;
};
