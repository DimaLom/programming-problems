const cashFunction = (fn) => {
    const cash = {}
    
    return (n) => {
        if (cash[n]) {
            console.log('From cash:', cash[n]);
            return cash[n];
        }
        
        let result = fn(n)
        
        cash[n] = result;
        
        console.log('From fn', result);
        return result;
    }
}

const factorial = (n) => {
    let result = 1;
    while (n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

const cashedFactorial = cashFunction(factorial);

cashedFactorial(5);
cashedFactorial(7);
cashedFactorial(5);
cashedFactorial(2);
cashedFactorial(7);
cashedFactorial(2);
cashedFactorial(4);
