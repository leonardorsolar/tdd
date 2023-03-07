// Escreva uma função que pegue números de 1 a 100
// e os exiba como uma string, mas para múltiplos de
// três ela retorna “Fizz” em vez do número, e para
// múltiplos de cinco ela retorna “Buzz”. Para números
// múltiplos de três e cinco, ele retorna “FizzBuzz”.

import Calculator from './Calculator';

describe('“FizzBuzz”', () => {
    test('Deve pegar um numero de 1 a 100', () => {
        const calculador = new Calculator();
        const num = calculador.getRandonNum();
        const valid = num > 0 && num < 100;
        expect(valid).toBeTruthy();
    });

    test('Deve rettomar múltiplos de 3', () => {
        const calculador = new Calculator();
        const num = calculador.getRandonNum();
        console.log(num);
        const name = calculador.multiples(num);
        console.log(name);
        if (num % 3 == 0 && num % 5 == 0) {
            expect(name).toBe('“FizzBuzz”');
        } else if (num % 3 == 0) {
            expect(name).toBe('Fizz');
        } else if (num % 5 == 0) {
            expect(name).toBe('Buzz');
        } else {
            expect(name).toBeUndefined();
        }
    });
});
