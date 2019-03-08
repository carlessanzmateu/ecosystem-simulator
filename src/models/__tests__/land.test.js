const Land = require('../land.js')

describe('Land', () => {
  it('should exist', () => {
    const land = new Land()

    expect(land).toBeTruthy()
  })

  it('should have getIsCultivable method', () => {
    const land = new Land()

    expect(land.getIsCultivable).toBeTruthy()
  })

  it('should return _isCultivable when call getIsCultivable method', () => {
    const land = new Land()
    land._isCultivable = false

    expect(land.getIsCultivable()).toBe(false)
  })

  it('should have setIsCultivable method', () => {
    const land = new Land()

    expect(land.setIsCultivable).toBeTruthy()
  })

  it('should set _isCultivable when call setIsCultivable method', () => {
    const land = new Land()
    land._isCultivable = false

    land.setIsCultivable(true)

    expect(land._isCultivable).toBe(true)
  })

  it('should have getCultivableDegradation method', () => {
    const land = new Land()

    expect(land.getCultivableDegradation).toBeTruthy()
  })

  it('should return _cultivableDegradation when call getCultivableDegradation', () => {
    const land = new Land()
    land._cultivableDegradation = 100

    expect(land.getCultivableDegradation()).toBe(100)
  })

  it('should have setCultivableDegradation method', () => {
    const land = new Land()

    expect(land.setCultivableDegradation).toBeTruthy()
  })

  it('should set _cultivableDegradation when call setCultivableDegradation', () => {
    const land = new Land()
    land._cultivableDegradation = 100
    land.setCultivableDegradation(1)

    expect(land._cultivableDegradation).toBe(1)
  })

  it('should have getCultivableRegeneration method', () => {
    const land = new Land()

    expect(land.getCultivableRegeneration).toBeTruthy()
  })

  it('should return _cultivableRegeneration when call getCultivableRegeneration', () => {
    const land = new Land()
    land._cultivableRegeneration = 100

    expect(land.getCultivableRegeneration()).toBe(100)
  })

  it('should have setCultivableRegeneration method', () => {
    const land = new Land()

    expect(land.setCultivableRegeneration).toBeTruthy()
  })

  it('should set _cultivableRegeneration when call setCultivableRegeneration', () => {
    const land = new Land()
    land._cultivableRegeneration = 100
    land.setCultivableRegeneration(1)

    expect(land._cultivableRegeneration).toBe(1)
  })

  it('should have getVegetation method', () => {
    const land = new Land()

    expect(land.getVegetation).toBeTruthy()
  })

  it('should return _vegetation when call getVegetation', () => {
    const land = new Land()
    const mockVegetation = ['tree']
    land._vegetation = mockVegetation

    expect(land.getVegetation()).toEqual(mockVegetation)
  })

  it('should have setVegetation method', () => {
    const land = new Land()

    expect(land.setVegetation).toBeTruthy()
  })

  it('should set _vegetation when call setVegetation', () => {
    const land = new Land()
    const mockVegetation = ['tree']
    land._vegetation = ['foo']
    land.setVegetation(mockVegetation)

    expect(land._vegetation).toEqual(mockVegetation)
  })

  it('should have getVegetationLength method', () => {
    const land = new Land()

    expect(land.getVegetationLength).toBeTruthy()
  })

  it('should return _vegetation length when call getVegetationLength', () => {
    const land = new Land()
    land._vegetation = ['tree']

    expect(land.getVegetationLength()).toBe(1)
  })

  it('should have getVegetationLimit method', () => {
    const land = new Land()

    expect(land.getVegetationLimit).toBeTruthy()
  })

  it('should return _vegetationLimit when call getVegetationLimit', () => {
    const land = new Land()
    land._vegetationLimit = 100

    expect(land.getVegetationLimit()).toBe(100)
  })

  it('should have setVegetationLimit method', () => {
    const land = new Land()

    expect(land.setVegetationLimit).toBeTruthy()
  })

  it('should set _vegetationLimit when call setVegetationLimit', () => {
    const land = new Land()
    const mockVegetationLimit = 15
    land._vegetationLimit = 10
    land.setVegetationLimit(mockVegetationLimit)

    expect(land._vegetationLimit).toEqual(mockVegetationLimit)
  })

  it('should have isVegetationOverVegetationLimit method', () => {
    const land = new Land()

    expect(land.isVegetationOverVegetationLimit).toBeTruthy()
  })

  it('should detect when vegetation length is higher than _vegetationLimit', () => {
    const land = new Land()
    land.setVegetation(['foo', 'bar', 'quz'])
    land.setVegetationLimit(2)

    expect(land.isVegetationOverVegetationLimit()).toBe(true)
  })

  it('should detect when vegetation length is not higher than _vegetationLimit', () => {
    const land = new Land()
    land.setVegetation(['foo', 'bar', 'quz'])
    land.setVegetationLimit(10)

    expect(land.isVegetationOverVegetationLimit()).toBe(false)
  })

  it('should have getMinerals method', () => {
    const land = new Land()

    expect(land.getMinerals).toBeTruthy()
  })

  it('should return _minerals when call getMinerals', () => {
    const land = new Land()
    const mineralsMock = ['gold']
    land._minerals = mineralsMock

    expect(land.getMinerals()).toEqual(mineralsMock)
  })

  it('should have setMinerals method', () => {
    const land = new Land()

    expect(land.setMinerals).toBeTruthy()
  })

  it('should set _minerals when call setMinerals', () => {
    const land = new Land()
    const mockMinerals = ['gold']
    
    land._minerals = ['silver']
    land.setMinerals(mockMinerals)

    expect(land._minerals).toEqual(mockMinerals)
  })

  it('should have getMineralsLength method', () => {
    const land = new Land()

    expect(land.getMineralsLength).toBeTruthy()
  })

  it('should return _minerals length when call getMineralsLength', () => {
    const land = new Land()
    land._minerals = ['gold']

    expect(land.getMineralsLength()).toBe(1)
  })
})
