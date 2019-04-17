const { minus } = require('./minus');

test('can subtract two numbers', () => {
  expect(minus(5, 4)).toBe(1);
});
