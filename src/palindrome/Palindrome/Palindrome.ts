export default class Palindrome {
  wordArray(name: string) {
    // seperar a string em letras [ 'm', 'o', 'm' ]
    const result = name.split('');
    console.log(result);
    return result;
  }

  wordArrayInverse(result: string[]) {
    // inverter o arrays
    const resultInverse = result.reverse();
    console.log(resultInverse);
    return resultInverse;
  }

  validWord(result: string[], resultInverse: string[]) {
    // checkar se 2 arrays saõ iguais
    const valid = JSON.stringify(result) === JSON.stringify(resultInverse);
    console.log(valid);
    return valid;
  }
}
