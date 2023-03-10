import FizzBuzz from './FizzBuzz';

describe('“FizzBuzz”', () => {
  test('Deve pegar um numero de 1 a 100', () => {
    const calculador = new FizzBuzz();
    const num = calculador.getRandonNum();
    const valid = num > 0 && num < 100;
    expect(valid).toBeTruthy();
  });

  // test("should print fizz if receive 3", () => {
  //     const result = fizzbuzz(3);
  //     expect("fizz").toBe(result);
  //   });
  //   test("should print fizz if receive a multiple of 3", () => {
  //     const result = fizzbuzz(6);
  //     expect("fizz").toBe(result);
  //   });
  //   test("should print buzz if receive 5", () => {
  //     const result = fizzbuzz(5);
  //     expect("buzz").toBe(result);
  //   });
  //   test("should print buzz if receive a multiple of 5", () => {
  //     const result = fizzbuzz(10);
  //     expect("buzz").toBe(result);
  //   });
  //   test("should print fizzbuzz if receive a multiple of 3 and 5", () => {
  //     const result = fizzbuzz(15);
  //     expect("fizzbuzz").toBe(result);
  //   });

  test('Deve retonar Fizz, Buzz e FizzBuzz, um múltiplos de 3 e de 5 ', () => {
    const calculador = new FizzBuzz();
    const num = calculador.getRandonNum();
    console.log(num);
    const name = calculador.multiples(num);
    console.log(name);
    if (num % 3 == 0 && num % 5 == 0) {
      expect(name).toBe('FizzBuzz');
    } else if (num % 3 == 0) {
      expect(name).toBe('Fizz');
    } else if (num % 5 == 0) {
      expect(name).toBe('Buzz');
    } else {
      expect(name).toBeUndefined();
    }
  });
});
