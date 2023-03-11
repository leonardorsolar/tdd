import PasswordValidator from './PasswordValidator';

describe('Password Validation', () => {
  test('Deve validar a senha "12345" que é maior que 5 caracteres', () => {
    //Give (Dadod que)
    const password = '12345';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.isLengthBetween(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
  test('Deve invalidar a senha "1234" que é menor que 5 caracteres', () => {
    //Give (Dadod que)
    const password = '1234';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.isLengthBetween(password);
    //Then (Então faça isso)
    expect(valid).toBeFalsy();
  });
  test('Deve validar a senha "123456789" que tem entre 5 e 15 caracteres', () => {
    //Give (Dadod que)
    const password = '123456789';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.isLengthBetween(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
  test('Deve validar a senha que tem entre 5 e 15 caracteres e que contém pelo menos um dígito', () => {
    //Give (Dadod que)
    const password = 'abcde3';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.hasNumber(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
  test('Deve não conter somente letras', () => {
    //Give (Dadod que)
    const password = 'abcdf';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.hasNumber(password);
    //Then (Então faça isso)
    expect(valid).toBeFalsy();
  });
  test('Deve conter pelo menos uma letra maiúscula', () => {
    //Give (Dadod que)
    const password = 'abcdfF';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.hasUppercase(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
  test('Deve não conter somente letras minusculas', () => {
    //Give (Dadod que)
    const password = 'abcdfF';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.hasUppercase(password);
    //Then (Então faça isso)hasUppercase
    expect(valid).toBeTruthy();
  });
});
