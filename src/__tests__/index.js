import { sum, substract, times } from '../';

test('sum', () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test('substract', () => {
  expect(substract(3, 2)).toBe(1);
});

test('times', () => {
  expect(times(1, 2, 3)).toBe(6);
});
