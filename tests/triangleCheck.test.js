import { triangleCheck } from '../src/challenges2';

describe('12 - Crie uma função de Condição de existência de um triângulo', () => {
  it('Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois', () => {
    expect(triangleCheck(16, 9, 2)).toBe(false);
    expect(triangleCheck(10, 3, 4)).toBe(false);
    expect(triangleCheck(6, 2, 2)).toBe(false);
  });

  it('Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas', () => {
    expect(triangleCheck(10, 13, 2)).toBe(false);
    expect(triangleCheck(12, 17, 4)).toBe(false);
    expect(triangleCheck(5, 10, 3)).toBe(false);
  });

  it('Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas', () => {
    expect(triangleCheck(10, 14, 8)).toBe(true);
    expect(triangleCheck(2, 3, 4)).toBe(true);
    expect(triangleCheck(16, 20, 30)).toBe(true);
  });
});
