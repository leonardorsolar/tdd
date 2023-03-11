import StatsCalculator from './StatsCalculator';

describe('“FizzBuzz”', () => {
  test('Deve receber uma sequencia de numeros e retornar o menor valor', () => {
    //Give (Dadod que)
    const numbers = [2, 4, 21, -8, 53, 40];
    //When (Quando acontecer algo)
    const statsCalculator = new StatsCalculator();
    const number = statsCalculator.minimumValue(numbers);
    //Then (Então faça isso)
    expect(number).toBe(-8);
  });
  test('Deve receber uma sequencia de numeros e retornar o maior valor', () => {
    //Give (Dadod que)
    const numbers = [2, 4, 21, -8, 53, 40];
    //When (Quando acontecer algo)
    const statsCalculator = new StatsCalculator();
    const number = statsCalculator.maximumValue(numbers);
    //Then (Então faça isso)
    expect(number).toBe(53);
  });
  test('Deve receber uma sequencia de numeros e retornar o maior valor', () => {
    //Give (Dadod que)
    const numbers = [2, 4, 21, -8, 53, 40];
    //When (Quando acontecer algo)
    const statsCalculator = new StatsCalculator();
    const number = statsCalculator.maximumValuev2(numbers);
    //Then (Então faça isso)
    expect(number).toBe(53);
  });
  test('Deve receber uma sequencia de 6 elementos no array', () => {
    //Give (Dadod que)
    const numbers = [2, 4, 21, -8, 53, 40];
    //When (Quando acontecer algo)
    const statsCalculator = new StatsCalculator();
    const number = statsCalculator.numElements(numbers);
    //Then (Então faça isso)
    expect(number).toBe(6);
  });
});
