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

  it('should have getIsFertile method', () => {
    const animal = new Animal()

    expect(animal.getIsFertile).toBeTruthy()
  })

  it('should return _isFertile when call getIsFertile', () => {
    const animal = new Animal()
    const expectedIsFertile = true
    animal._isFertile = true

    expect(animal.getIsFertile()).toBe(expectedIsFertile)
  })

  it('should have setIsFertile method', () => {
    const animal = new Animal()

    expect(animal.setIsFertile).toBeTruthy()
  })

  it('should set _isFertile when call setIsFertile', () => {
    const animal = new Animal()
    const initialIsFertile = false
    const expectedIsFertile = true

    animal._isFertile = initialIsFertile
    animal.setIsFertile(true)

    expect(animal._isFertile).toBe(expectedIsFertile)
  })

  it('should have getEnergyIndex method', () => {
    const animal = new Animal()

    expect(animal.getEnergyIndex).toBeTruthy()
  })

  it('should return _energyIndex when call getEnergyIndex', () => {
    const animal = new Animal()
    const expectedEnergyIndex = true
    animal._energyIndex = true

    expect(animal.getEnergyIndex()).toBe(expectedEnergyIndex)
  })

  it('should have setEnergyIndex method', () => {
    const animal = new Animal()

    expect(animal.setEnergyIndex).toBeTruthy()
  })

  it('should set _energyIndex when call setEnergyIndex', () => {
    const animal = new Animal()
    const initialEnergyIndex = false
    const expectedEnergyIndex = true

    animal._energyIndex = initialEnergyIndex
    animal.setEnergyIndex(true)

    expect(animal._energyIndex).toBe(expectedEnergyIndex)
  })

  it('should have getHungryIndex method', () => {
    const animal = new Animal()

    expect(animal.getHungryIndex).toBeTruthy()
  })

  it('should return _hungryIndex when call getHungryIndex', () => {
    const animal = new Animal()
    const expectedHungryIndex = true
    animal._hungryIndex = true

    expect(animal.getHungryIndex()).toBe(expectedHungryIndex)
  })

  it('should have setHungryIndex method', () => {
    const animal = new Animal()

    expect(animal.setHungryIndex).toBeTruthy()
  })

  it('should set _hungryIndex when call setHungryIndex', () => {
    const animal = new Animal()
    const initialHungryIndex = false
    const expectedHungryIndex = true

    animal._hungryIndex = initialHungryIndex
    animal.setHungryIndex(true)

    expect(animal._hungryIndex).toBe(expectedHungryIndex)
  })

  it('should have getDiseases method', () => {
    const animal = new Animal()

    expect(animal.getDiseases).toBeTruthy()
  })

  it('should return _diseases when call getDiseases', () => {
    const animal = new Animal()
    const expectedDiseases = []
    animal._diseases = []

    expect(animal.getDiseases()).toEqual(expectedDiseases)
  })

  it('should have setDiseases method', () => {
    const animal = new Animal()

    expect(animal.setDiseases).toBeTruthy()
  })

  it('should set _diseases when call setDiseases', () => {
    const animal = new Animal()
    const initialDiseases = []
    const expectedDiseases = ['foo']

    animal._diseases = initialDiseases
    animal.setDiseases(['foo'])

    expect(animal._diseases).toEqual(expectedDiseases)
  })

  it('should have getWounds method', () => {
    const animal = new Animal()

    expect(animal.getWounds).toBeTruthy()
  })

  it('should return _wounds when call getWounds', () => {
    const animal = new Animal()
    const expectedWounds = []
    animal._wounds = []

    expect(animal.getWounds()).toEqual(expectedWounds)
  })

  it('should have setWounds method', () => {
    const animal = new Animal()

    expect(animal.setWounds).toBeTruthy()
  })

  it('should set _wounds when call setWounds', () => {
    const animal = new Animal()
    const initialWounds = []
    const expectedWounds = ['foo']

    animal._wounds = initialWounds
    animal.setWounds(['foo'])

    expect(animal._wounds).toEqual(expectedWounds)
  })

  it('should have getIsPregnant method', () => {
    const animal = new Animal()

    expect(animal.getIsPregnant).toBeTruthy()
  })

  it('should return _isPregnant when call getIsPregnant', () => {
    const animal = new Animal()
    const expectedIsPregnant = false
    animal._isPregnant = false

    expect(animal.getIsPregnant()).toBe(expectedIsPregnant)
  })

  it('should have setIsPregnant method', () => {
    const animal = new Animal()

    expect(animal.setIsPregnant).toBeTruthy()
  })

  it('should set _isPregnant when call setIsPregnant', () => {
    const animal = new Animal()
    const initialIsPregnant = false
    const expectedIsPregnant = true

    animal._isPregnant = initialIsPregnant
    animal.setIsPregnant(true)

    expect(animal._isPregnant).toBe(expectedIsPregnant)
  })

  it('should have getBreedings method', () => {
    const animal = new Animal()

    expect(animal.getBreedings).toBeTruthy()
  })

  it('should return _breedings when call getBreedings', () => {
    const animal = new Animal()
    const expectedBreedings = []
    animal._breedings = []

    expect(animal.getBreedings()).toEqual(expectedBreedings)
  })

  it('should have setBreedings method', () => {
    const animal = new Animal()

    expect(animal.setBreedings).toBeTruthy()
  })

  it('should set _breedings when call setBreedings', () => {
    const animal = new Animal()
    const initialBreedings = []
    const expectedBreedings = ['foo']

    animal._breedings = initialBreedings
    animal.setBreedings(['foo'])

    expect(animal._breedings).toEqual(expectedBreedings)
  })

  it('should have eat method', () => {
    const animal = new Animal()

    expect(animal.eat).toBeTruthy()
  })

  it('should reduce hungryIndex and increase energyIndex when call eat method', () => {
    const animal = new Animal()
    const initialHungryIndex = 10
    const expectedHungryIndex = 0
    const initialEnergyIndex = 0
    const expectedEnergyIndex = 10

    animal._hungryIndex = initialHungryIndex
    animal._energyIndex = initialEnergyIndex

    animal.eat(10, 10)

    expect(animal.getHungryIndex()).toBe(expectedHungryIndex)
    expect(animal.getEnergyIndex()).toBe(expectedEnergyIndex)
  })

  it('should not be less than 0 _hungryIndex when call eat method', () => {
    const animal = new Animal()
    const initialHungryIndex = 10
    const expectedHungryIndex = 0

    animal._hungryIndex = initialHungryIndex

    animal.eat(100, 10)

    expect(animal.getHungryIndex()).toBe(expectedHungryIndex)
  })

  it('should not be more than 100 _energyIndex when call eat method', () => {
    const animal = new Animal()
    const initialEnergyIndex = 90
    const expectedEnergyIndex = 100

    animal._energyIndex = initialEnergyIndex

    animal.eat(10, 50)

    expect(animal.getEnergyIndex()).toBe(expectedEnergyIndex)
  })
})