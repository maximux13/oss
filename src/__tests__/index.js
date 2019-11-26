import math from '../';

test('sum', () => {
  expect(math.sum(1, 2, 3)).toBe(6);
});

test('substract', () => {
  expect(math.substract(3, 2)).toBe(1);
});

test('times', () => {
  expect(math.times(1, 2, 3)).toBe(6);
});
