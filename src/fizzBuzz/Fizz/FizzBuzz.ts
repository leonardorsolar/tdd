export default class FizzBuzz {
  getRandonNum(): number {
    const num: number = Math.floor(Math.random() * 100);
    return num;
  }

  multiples(num: number): any {
    if (num % 3 == 0 && num % 5 == 0) {
      return 'FizzBuzz';
    } else if (num % 3 == 0) {
      return 'Fizz';
    } else if (num % 5 == 0) {
      return 'Buzz';
    }
  }
}
