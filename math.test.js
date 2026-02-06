const { factorial, fibonacci } = require('./math');

test('Factorial de 5 debe ser 120', () => {
  expect(factorial(5)).toBe(100);
});

test('Fibonacci en posición 6 debe ser 8', () => {
  expect(fibonacci(6)).toBe(8);
});
