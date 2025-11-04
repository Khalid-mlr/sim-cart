export class User {
  constructor(email, password, username = null) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
