export default class PasswordValid {
  //constructor() {}

  valid(pass: string): boolean {
    // função que retorna o numero de caracteres de uma string
    console.log(pass.length);
    if (pass.length > 5 && pass.length < 15) return true;
    return false;
  }
}
