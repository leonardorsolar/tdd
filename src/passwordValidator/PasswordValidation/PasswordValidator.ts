export default class PasswordValidator {
  numberStr(password) {
    const numStr = password.length;
    console.log(numStr);
    if (numStr >= 5 && numStr <= 15) {
      return true;
    } else {
      return false;
    }
  }

  isNumber(numStr) {
    const regex = /[0-9]/;
    if (regex.test(numStr)) {
      return true;
    } else {
      return false;
    }
  }

  uppercase(numStr) {
    const regex = /[A-Z]/;
    if (regex.test(numStr)) {
      return true;
    } else {
      return false;
    }
  }
}
