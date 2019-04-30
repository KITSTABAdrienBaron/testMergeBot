const subtract = require('./SBTRKT');

test('subtract 1 from 2 equalling 1', () => {
    expect(subtract(2, 1)).toBe(1);
});