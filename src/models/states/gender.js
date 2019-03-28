class Gender {
  constructor() {
    this._genderOptions = {
      MALE: 'MALE',
      FEMALE: 'FEMALE'
    }
  }

  getMaleGender() {
    return this._genderOptions.MALE
  }

  getFemaleGender() {
    return this._genderOptions.FEMALE
  }

  getGenderOptions() {
    return this._genderOptions
  }

  isMale(genderToCheck) {
    return this.getMaleGender() === genderToCheck
  }

  isFemale(genderToCheck) {
    return this.getFemaleGender() === genderToCheck
  }
}

module.exports = Gender
