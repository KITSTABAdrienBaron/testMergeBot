const { sum, minus } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('can subtract two numbers', () => {
  expect(minus(5, 4)).toBe(1);
});
