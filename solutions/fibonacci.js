const fibonacci = (n) =>
  n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
