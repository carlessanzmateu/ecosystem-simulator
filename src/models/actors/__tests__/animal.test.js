const Animal = require('../animal.js')

describe('Animal', () => {
  it('should be created', () => {
    const animal = new Animal()

    expect(animal).toBeTruthy()
  })

  it('should have getTimeToDeath method', () => {
    const animal = new Animal()

    expect(animal.getTimeToDeath).toBeTruthy()
  })

  it('should return _timeToDeath when call getTimeToDeath', () => {
    const animal = new Animal()
    const expectedTimeToDeath = 10
    animal._timeToDeath = 10

    expect(animal.getTimeToDeath()).toBe(expectedTimeToDeath)
  })

  it('should have setTimeToDeath method', () => {
    const animal = new Animal()

    expect(animal.setTimeToDeath).toBeTruthy()
  })

  it('should set _timeToDeath when call setTimeToDeath', () => {
    const animal = new Animal()
    const initialTimeToDeath = 10
    const expectedTimeToDeath = 100

    animal._timeToDeath = initialTimeToDeath
    animal.setTimeToDeath(100)

    expect(animal._timeToDeath).toBe(expectedTimeToDeath)
  })

  it('should have getGender method', () => {
    const animal = new Animal()

    expect(animal.getGender).toBeTruthy()
  })

  it('should return _gender when call getGender', () => {
    const animal = new Animal()
    const expectedGender = 'FEMALE'
    animal._gender = 'FEMALE'

    expect(animal.getGender()).toBe(expectedGender)
  })

  it('should have setGender method', () => {
    const animal = new Animal()

    expect(animal.setGender).toBeTruthy()
  })

  it('should set _gender when call setGender', () => {
    const animal = new Animal()
    const initialGender = 'FEMALE'
    const expectedGender = 'MALE'

    animal._gender = initialGender
    animal.setGender('MALE')

    expect(animal._gender).toBe(expectedGender)
  })
})