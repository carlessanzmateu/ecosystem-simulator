const Gender = require('../gender.js')

describe('Gender', () => {
  it('should be created', () => {
    const gender = new Gender()

    expect(gender).toBeTruthy()
  })

  it('should have getMaleGender method', () => {
    const gender = new Gender()

    expect(gender.getMaleGender).toBeTruthy()
  })

  it('should return "MALE" when call getMaleGender', () => {
    const gender = new Gender()
    const expectedResponse = 'MALE'

    expect(gender.getMaleGender()).toBe(expectedResponse)
  })

  it('should have getFemaleGender method', () => {
    const gender = new Gender()

    expect(gender.getFemaleGender).toBeTruthy()
  })

  it('should return "FEMALE" when call getFemaleGender', () => {
    const gender = new Gender()
    const expectedResponse = 'FEMALE'

    expect(gender.getFemaleGender()).toBe(expectedResponse)
  })

  it('should have getGenderOptions method', () => {
    const gender = new Gender()

    expect(gender.getGenderOptions).toBeTruthy()
  })

  it('should return gender options when call getGenderOptions', () => {
    const gender = new Gender()
    const expectedResponse = {
      MALE: 'MALE',
      FEMALE: 'FEMALE'
    }

    expect(gender.getGenderOptions()).toEqual(expectedResponse)
  })

  it('should have isMale method', () => {
    const gender = new Gender()

    expect(gender.isMale).toBeTruthy()
  })

  it('should return true when call isMale and given gender is MALE', () => {
    const gender = new Gender()
    const expectedResponse = true

    const genderCheck = gender.isMale('MALE')

    expect(genderCheck).toBe(expectedResponse)
  })

  it('should return false when call isMale and given gender is NOT MALE', () => {
    const gender = new Gender()
    const expectedResponse = false

    const genderCheck = gender.isMale('FEMALE')

    expect(genderCheck).toBe(expectedResponse)
  })

  it('should have isFemale method', () => {
    const gender = new Gender()

    expect(gender.isFemale).toBeTruthy()
  })

  it('should return true when call isFemale and given gender is FEMALE', () => {
    const gender = new Gender()
    const expectedResponse = true

    const genderCheck = gender.isFemale('FEMALE')

    expect(genderCheck).toBe(expectedResponse)
  })

  it('should return false when call isFemale and given gender is NOT FEMALE', () => {
    const gender = new Gender()
    const expectedResponse = false

    const genderCheck = gender.isFemale('MALE')

    expect(genderCheck).toBe(expectedResponse)
  })
})