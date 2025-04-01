import { expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './calculator';

test('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 1 + 2 to equal -1', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('divide 1 / 2 to equal 0.5', () => {
  expect(divide(1, 2)).toBe(0.5);
});

test('multiply 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('add 2 + 2 to equal 4', () => {
  expect(add(2, 2)).toBe(4);
});

test('add 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});