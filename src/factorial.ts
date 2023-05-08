const factorial = (n: number) => n === 1 ? n : n * factorial(n - 1)

console.log(factorial(6))