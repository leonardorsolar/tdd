import PasswordValid from './PasswordValid';

// test('should first', async () => {
//   //give - dado que
//   const password = new PasswordValid();
//   //when - enquanto
//   const isPasswordValid = password.valid();
//   //then - então
//   expect(isPasswordValid).toBeTruthy();
// });

test('Deve retornar um valor maior que 5 e menor que 15', async () => {
  //give - dado que
  const pass = '123456';
  const password = new PasswordValid();
  //when - enquanto
  const isPasswordValid = password.valid(pass);
  //then - então
  expect(isPasswordValid).toBeTruthy();
});
