import { add, subtract } from './index';

test('Telt de twee getallen bij elkaar op', () => {
    expect(add(1, 5)).toBe(6);
    expect(add(7, 5)).toBe(12);
});

test('Trekt de twee getallen van elkaar af', () => {
    expect(subtract(5, 1)).toBe(4);
});
