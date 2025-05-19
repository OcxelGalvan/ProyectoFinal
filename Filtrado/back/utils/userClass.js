class User {
  constructor(firstName, lastName, email, password, date, sex, image) {
    this.uid = User.generateUid(10);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.date = date;
    this.sex = sex;
    this.image = image || User.generateImgUrl(this.uid, this.sex);
  }

  static generateUid(len) {
    return Array.from({ length: len }, () => Math.trunc(Math.random() * 10)).join('');
  }

  static generateImgUrl(uid, sex) {
    const id = uid % 100;
    return `https://randomuser.me/api/portraits/${sex === 'H' ? 'men' : 'women'}/${id}.jpg`;
  }
}

module.exports = User;
