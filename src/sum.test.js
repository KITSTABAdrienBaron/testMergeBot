const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('returns null if either argument is undefined', () => {
  expect(sum(1, undefined)).toEqual(null);
});
