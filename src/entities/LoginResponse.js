class LoginResponse {
  constructor(
    message,
    name,
    surname,
    idNumber,
    employeeNumber,
    address,
    username,
    email,
    role,
    loginStatus
  ) {
    this.message = message;
    this.name = name;
    this.surname = surname;
    this.idNumber = idNumber;
    this.employeeNumber = employeeNumber;
    this.address = address; // expects an Address object
    this.username = username;
    this.email = email;
    this.role = role;
    this.loginStatus = loginStatus;
  }

  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get surname() {
    return this._surname;
  }

  set surname(value) {
    this._surname = value;
  }

  get idNumber() {
    return this._idNumber;
  }

  set idNumber(value) {
    this._idNumber = value;
  }

  get employeeNumber() {
    return this._employeeNumber;
  }

  set employeeNumber(value) {
    this._employeeNumber = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get role() {
    return this._role;
  }

  set role(value) {
    this._role = value;
  }

  get loginStatus() {
    return this._loginStatus;
  }

  set loginStatus(value) {
    this._loginStatus = value;
  }

} //-------------
