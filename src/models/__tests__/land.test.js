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

  it('should have getMineralsLimit method', () => {
    const land = new Land()

    expect(land.getMineralsLimit).toBeTruthy()
  })

  it('should return _mineralsLimit length when call getMineralsLimit', () => {
    const land = new Land()
    land._mineralsLimit = 100

    expect(land.getMineralsLimit()).toBe(100)
  })

  it('should have setMineralsLimit method', () => {
    const land = new Land()

    expect(land.setMineralsLimit).toBeTruthy()
  })

  it('should set _mineralsLimit when call setMinerals', () => {
    const land = new Land()
    
    land._mineralsLimit = 100
    land.setMineralsLimit(5)

    expect(land._mineralsLimit).toEqual(5)
  })

  it('should have isMineralsOverMineralsLimit method', () => {
    const land = new Land()

    expect(land.isMineralsOverMineralsLimit).toBeTruthy()
  })

  it('should detect when minerals length is higher than _mineralsLimit', () => {
    const land = new Land()
    land.setMinerals(['foo', 'bar', 'quz'])
    land.setMineralsLimit(2)

    expect(land.isMineralsOverMineralsLimit()).toBe(true)
  })

  it('should detect when minerals length is not higher than _mineralsLimit', () => {
    const land = new Land()
    land.setMinerals(['foo', 'bar', 'quz'])
    land.setMineralsLimit(10)

    expect(land.isMineralsOverMineralsLimit()).toBe(false)
  })

  it('should have getAnimals method', () => {
    const land = new Land()

    expect(land.getAnimals).toBeTruthy()
  })

  it('should return _animals when call getAnimals', () => {
    const land = new Land()
    const animalsMock = ['wolf']
    land._animals = animalsMock

    expect(land.getAnimals()).toBe(animalsMock)
  })

  it('should have setAnimals method', () => {
    const land = new Land()

    expect(land.setAnimals).toBeTruthy()
  })

  it('should set _animals when call setAnimals', () => {
    const land = new Land()
    const expectedAnimalsMock = ['wolf']
    
    land._animals = ['rabbit']
    land.setAnimals(expectedAnimalsMock)

    expect(land._animals).toEqual(expectedAnimalsMock)
  })

  it('should have getAnimalsLength method', () => {
    const land = new Land()

    expect(land.getAnimalsLength).toBeTruthy()
  })

  it('should return animals length when call getAnimalsLength', () => {
    const land = new Land()
    land._animals = ['wolf']

    expect(land.getAnimalsLength()).toBe(1)
  })

  it('should have getAnimalsLimit method', () => {
    const land = new Land()

    expect(land.getAnimalsLimit).toBeTruthy()
  })

  it('should return _animalsLimit when call getAnimalsLimit', () => {
    const land = new Land()
    land._animalsLimit = 100

    expect(land.getAnimalsLimit()).toBe(100)
  })

  it('should have setAnimalsLimit method', () => {
    const land = new Land()

    expect(land.setAnimalsLimit).toBeTruthy()
  })

  it('should set _animalsLimit when call setAnimalsLimit', () => {
    const land = new Land()
    const expectedAnimalsLimitMock = 100
    
    land._animalsLimit = 15
    land.setAnimalsLimit(expectedAnimalsLimitMock)

    expect(land._animalsLimit).toEqual(expectedAnimalsLimitMock)
  })

  it('should have isAnimalsOverAnimalsLimit method', () => {
    const land = new Land()

    expect(land.isAnimalsOverAnimalsLimit).toBeTruthy()
  })

  it('should detect when animals length is higher than _animalsLimit', () => {
    const land = new Land()
    land.setAnimals(['foo', 'bar', 'quz'])
    land.setAnimalsLimit(2)

    expect(land.isAnimalsOverAnimalsLimit()).toBe(true)
  })

  it('should detect when animals length is not higher than _animalsLimit', () => {
    const land = new Land()
    land.setAnimals(['foo', 'bar', 'quz'])
    land.setAnimalsLimit(10)

    expect(land.isAnimalsOverAnimalsLimit()).toBe(false)
  })

  it('should have getContaminationIndex method', () => {
    const land = new Land()

    expect(land.getContaminationIndex).toBeTruthy()
  })

  it('should return _contaminationIndex when call getContaminationIndex', () => {
    const land = new Land()
    land._contaminationIndex = 100

    expect(land.getContaminationIndex()).toBe(100)
  })

  it('should have setContaminationIndex method', () => {
    const land = new Land()

    expect(land.setContaminationIndex).toBeTruthy()
  })

  it('should set _contaminationIndex when call setContaminationIndex', () => {
    const land = new Land()
    const expectedContaminationIndexMock = 100
    
    land._contaminationIndex = 15
    land.setContaminationIndex(expectedContaminationIndexMock)

    expect(land._contaminationIndex).toEqual(expectedContaminationIndexMock)
  })

  it('should have getIsConstructable method', () => {
    const land = new Land()

    expect(land.getIsConstructable).toBeTruthy()
  })

  it('should return _isConstructable when call getIsConstructable', () => {
    const land = new Land()
    land._isConstructable = true

    expect(land.getIsConstructable()).toBe(true)
  })

  it('should have setIsConstructable method', () => {
    const land = new Land()

    expect(land.setIsConstructable).toBeTruthy()
  })

  it('should set _isConstructable when call setIsConstructable', () => {
    const land = new Land()
    const expectedIsConstructableMock = true
    
    land._isConstructable = false
    land.setIsConstructable(expectedIsConstructableMock)

    expect(land._isConstructable).toEqual(expectedIsConstructableMock)
  })

  it('should have getBuildings method', () => {
    const land = new Land()

    expect(land.getBuildings).toBeTruthy()
  })

  it('should return _buildings when call getBuildings', () => {
    const land = new Land()
    const mockBuildings = ['farm']
    land._buildings = mockBuildings

    expect(land.getBuildings()).toEqual(mockBuildings)
  })

  it('should have setBuildings method', () => {
    const land = new Land()

    expect(land.setBuildings).toBeTruthy()
  })

  it('should set _buildings when call setBuildings', () => {
    const land = new Land()
    const expectedBuildingsMock = ['farm']
    
    land._buildings = ['inn']
    land.setBuildings(expectedBuildingsMock)

    expect(land._buildings).toEqual(expectedBuildingsMock)
  })

  it('should have getBuildingsLength method', () => {
    const land = new Land()

    expect(land.getBuildingsLength).toBeTruthy()
  })

  it('should return buildings length when call getBuildingsLength', () => {
    const land = new Land()
    land._buildings = ['farm']

    expect(land.getBuildingsLength()).toBe(1)
  })

  it('should have getBuildingsLimit method', () => {
    const land = new Land()

    expect(land.getBuildingsLimit).toBeTruthy()
  })

  it('should return _buildingsLimit when call getBuildingsLimit', () => {
    const land = new Land()
    land._buildingsLimit = 100

    expect(land.getBuildingsLimit()).toBe(100)
  })

  it('should have setBuildingsLimit method', () => {
    const land = new Land()

    expect(land.setBuildingsLimit).toBeTruthy()
  })

  it('should set _buildingsLimit when call setBuildingsLimit', () => {
    const land = new Land()
    const expectedBuildingsLimitMock = 123
    
    land._buildingsLimit = 789
    land.setBuildingsLimit(expectedBuildingsLimitMock)

    expect(land._buildingsLimit).toEqual(expectedBuildingsLimitMock)
  })

  it('should have isBuildingsOverBuildingsLimit method', () => {
    const land = new Land()

    expect(land.isBuildingsOverBuildingsLimit).toBeTruthy()
  })

  it('should detect when buildings length is higher than _buildingsLimit', () => {
    const land = new Land()
    land.setBuildings(['foo', 'bar', 'quz'])
    land.setBuildingsLimit(2)

    expect(land.isBuildingsOverBuildingsLimit()).toBe(true)
  })

  it('should detect when buildings length is not higher than _buildingsLimit', () => {
    const land = new Land()
    land.setBuildings(['foo', 'bar', 'quz'])
    land.setBuildingsLimit(10)

    expect(land.isBuildingsOverBuildingsLimit()).toBe(false)
  })
})
