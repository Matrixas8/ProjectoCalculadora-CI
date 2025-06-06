const { sumar, restar, multiplicar } = require('../public/calculator');

test('suma 3 + 2 = 5', () => {
  expect(sumar(3, 2)).toBe(5);
});

test('resta 5 - 3 = 2', () => {
  expect(restar(5, 3)).toBe(2);
});

test('multiplicación 4 * 3 = 12', () => {
  expect(multiplicar(4, 3)).toBe(12);
});
