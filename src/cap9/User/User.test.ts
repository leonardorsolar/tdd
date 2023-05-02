import User from './User';

describe('Domain: User', () => {
  test('Deve criar um usuário válido', async () => {
    //given - dado que
    const input = {
      firstName: 'Leonardo',
      lastName: 'Solar',
    };
    //when - quando acontecer algo
    const user = User.create(input.firstName, input.lastName);
    console.log(user);
    //then - então faça isso
    expect(user.firstName.value).toBe('Leonardo');
  });

  // test('Não deve criar um usuário com um nome e/ou sobrenome ausente ', async () => {
  //   //given - dado que
  //   const input = {
  //     firstName: '',
  //     lastName: 'Solar',
  //   };
  //   //when - quando acontecer algo
  //   //const user = new User(input.firstName, input.lastName);
  //   //then - então faça isso
  //   expect(() => User.create(input.firstName, input.lastName)).toThrow(
  //     'Insira o nome e o sobrenome',
  //   );
  // });

  // test('Não deve criar um usuário com um nome com mais de 1 carcater e menos de 11 caracter ', async () => {
  //   //given - dado que
  //   const input = {
  //     firstName: 'leonardosso',
  //     lastName: 'Solar',
  //   };
  //   //when - quando acontecer algo
  //   //const user = new User(input.firstName, input.lastName);
  //   //then - então faça isso
  //   expect(() => User.create(input.firstName, input.lastName)).toThrow(
  //     'Insira o nome com o máximo de 10 caracteres',
  //   );
  // });

  // test('Deve criar um gerador de mail: sobrenome + as duas primeiras letras de seu primeiro nome + @essentialist.dev ', async () => {
  //   //given - dado que
  //   const input = {
  //     firstName: 'Leonardo',
  //     lastName: 'Solar',
  //   };
  //   const user = User.create(input.firstName, input.lastName);
  //   //when - quando acontecer algo
  //   const email = user.createEmail();
  //   //then - então faça isso
  //   expect(email).toBe('solale@essentialist.dev');
  // });

  test('Deve atualizar o nome e o sobrenome ', async () => {
    //given - dado que
    const input = {
      firstName: 'Leo',
      lastName: 'Rodrigues',
    };
    //when - quando acontecer algo
    const user = User.create(input.firstName, input.lastName);
    //then - então faça isso
    expect(user.firstName.value).toBe('Leo');
  });
});
