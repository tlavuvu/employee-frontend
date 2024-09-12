class Address {
  constructor(houseNumber, streetName, town, postalCode) {
    this.houseNumber = houseNumber;
    this.streetName = streetName;
    this.town = town;
    this.postalCode = postalCode;
  }

  sethouseNumber(newhouseNumber) {
    this.houseNumber = newhouseNumber;
  }

  gethouseNumber() {
    return this.houseNumber;
  }
  setstreetName(newstreetName) {
    this.housestreetName = newstreetName;
  }

  gethouseNumber() {
    return this.streetName;
  }
  settown(newtown) {
    this.town = newtown;
  }

  gettown() {
    return this.town;
  }

  setpostalCode(newpostalCode) {
    this.postalCode = newpostalCode;
  }

  gethouseNumber() {
    return this.postalCode;
  }
}
