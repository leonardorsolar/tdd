import FirstName from './FirstName';

interface InvalidStudentProps {
  firstName: string;
  lastName: string;
}

export default class User {
  private constructor(
    readonly firstName: FirstName,
    readonly lastName: string,
  ) {}

  createEmail(): any {
    const emailLastName = this.lastName.substr(0, 4).toLowerCase();
    const emailName = this.firstName
      .toString()
      .substr(0, 2)
      .toLowerCase();
    const email = `${emailLastName}` + `${emailName}` + `@essentialist.dev`;
    return email;
  }

  static create(firstName: string, lastName: string): any {
    const firstNameOrError = FirstName.create(firstName);
    // if (!firstNameOrError) {
    //   return throw new Error("Problemas");
    // }
    return new User(firstNameOrError, lastName);
  }
}
