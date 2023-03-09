import Palindrome from './Palindrome';

describe('palindrome checker', () => {
  test('deve quebra uma palavra em um array', () => {
    //Give(dado que)
    const name = 'mom';
    //When (quando acontecer algo)
    const palindrome = new Palindrome();
    const wordArray = palindrome.wordArray(name);
    //Then (Então faça isso)
    expect(wordArray.length).toBe(3);
  });

  test('deve inverter um array', () => {
    //Give(dado que)
    const wordArray = ['m', 'o', 'm'];
    //When (quando acontecer algo)
    const palindrome = new Palindrome();
    const wordArrayInverse = palindrome.wordArrayInverse(wordArray);
    //Then (Então faça isso)
    expect(wordArrayInverse.length).toBe(3);
  });

  test('deve identificar se uma palavra é um palimodro', () => {
    //Give(dado que)
    const name = 'mom';
    //When (quando acontecer algo)
    const palindrome = new Palindrome();
    const wordArray = palindrome.wordArray(name);
    const wordArrayInverse = palindrome.wordArrayInverse(wordArray);
    const valid = palindrome.validWord(wordArray, wordArrayInverse);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });

  test('deve identificar se uma frase é um palimodro', () => {
    //Give(dado que)
    const phrase = 'Was It A Rat I Saw';
    //When (quando acontecer algo)
    const palindrome = new Palindrome();
    const wordArray = palindrome.wordArray(phrase);
    const wordArrayInverse = palindrome.wordArrayInverse(wordArray);
    const valid = palindrome.validWord(wordArray, wordArrayInverse);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
});
