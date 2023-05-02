export default class FirstName {
  public readonly value: string;
  private constructor(readonly firstName: string) {
    this.value = firstName;
  }

  private static isValidName(firstName: string): boolean {
    if (this.emptyOrTooLittle(firstName) || this.tooLarge(firstName)) {
      return false;
    }

    return true;
  }

  private static emptyOrTooLittle(firstName: string): boolean {
    return !firstName || firstName.trim().length < 3;
  }

  private static tooLarge(Name: string): boolean {
    return Name.length > 256;
  }

  static create(firstName: string): FirstName {
    if (!this.isValidName(firstName)) {
      throw new Error('Insira o nome');
    } else {
      return new FirstName(firstName);
    }
  }
}
