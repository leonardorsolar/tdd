import PasswordValidator from './PasswordValidator';

describe('Password Validation', () => {
  test('Deve ter a senha > 5 caracteres', () => {
    //Give (Dadod que)
    const password = '12345';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.numberStr(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
  test('Deve ter a senha < 5 caracteres', () => {
    //Give (Dadod que)
    const password = '1234';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.numberStr(password);
    //Then (Então faça isso)
    expect(valid).toBeFalsy();
  });
  test('Deve ter a senha entre  5 e 15 caracteres', () => {
    //Give (Dadod que)
    const password = '123456789';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.numberStr(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
  test('Deve conter pelo menos um dígito', () => {
    //Give (Dadod que)
    const password = 'abcde3';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.isNumber(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
  test('Deve não conter somente letras', () => {
    //Give (Dadod que)
    const password = 'abcdf';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.isNumber(password);
    //Then (Então faça isso)
    expect(valid).toBeFalsy();
  });
  test('Deve conter pelo menos uma letra maiúscula', () => {
    //Give (Dadod que)
    const password = 'abcdfF';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.uppercase(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
  test('Deve não conter somente letras minusculas', () => {
    //Give (Dadod que)
    const password = 'abcdfF';
    //When (Quando acontecer algo)
    const passwordValidator = new PasswordValidator();
    const valid = passwordValidator.uppercase(password);
    //Then (Então faça isso)
    expect(valid).toBeTruthy();
  });
});
