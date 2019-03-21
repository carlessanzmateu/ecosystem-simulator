const Biome = require('../biome.js')

describe('Biome', () => {
  it('should exist', () => {
    const biome = new Biome()

    expect(biome).toBeTruthy()
  })

  it('should have getIsCultivable method', () => {
    const biome = new Biome()

    expect(biome.getIsCultivable).toBeTruthy()
  })

  it('should return _isCultivable when call getIsCultivable method', () => {
    const biome = new Biome()
    biome._isCultivable = false

    expect(biome.getIsCultivable()).toBe(false)
  })

  it('should have setIsCultivable method', () => {
    const biome = new Biome()

    expect(biome.setIsCultivable).toBeTruthy()
  })

  it('should set _isCultivable when call setIsCultivable method', () => {
    const biome = new Biome()
    biome._isCultivable = false

    biome.setIsCultivable(true)

    expect(biome._isCultivable).toBe(true)
  })

  it('should have getCultivableDegradation method', () => {
    const biome = new Biome()

    expect(biome.getCultivableDegradation).toBeTruthy()
  })

  it('should return _cultivableDegradation when call getCultivableDegradation', () => {
    const biome = new Biome()
    biome._cultivableDegradation = 100

    expect(biome.getCultivableDegradation()).toBe(100)
  })

  it('should have setCultivableDegradation method', () => {
    const biome = new Biome()

    expect(biome.setCultivableDegradation).toBeTruthy()
  })

  it('should set _cultivableDegradation when call setCultivableDegradation', () => {
    const biome = new Biome()
    biome._cultivableDegradation = 100
    biome.setCultivableDegradation(1)

    expect(biome._cultivableDegradation).toBe(1)
  })

  it('should have getCultivableRegeneration method', () => {
    const biome = new Biome()

    expect(biome.getCultivableRegeneration).toBeTruthy()
  })

  it('should return _cultivableRegeneration when call getCultivableRegeneration', () => {
    const biome = new Biome()
    biome._cultivableRegeneration = 100

    expect(biome.getCultivableRegeneration()).toBe(100)
  })

  it('should have setCultivableRegeneration method', () => {
    const biome = new Biome()

    expect(biome.setCultivableRegeneration).toBeTruthy()
  })

  it('should set _cultivableRegeneration when call setCultivableRegeneration', () => {
    const biome = new Biome()
    biome._cultivableRegeneration = 100
    biome.setCultivableRegeneration(1)

    expect(biome._cultivableRegeneration).toBe(1)
  })

  it('should have getVegetation method', () => {
    const biome = new Biome()

    expect(biome.getVegetation).toBeTruthy()
  })

  it('should return _vegetation when call getVegetation', () => {
    const biome = new Biome()
    const mockVegetation = ['tree']
    biome._vegetation = mockVegetation

    expect(biome.getVegetation()).toEqual(mockVegetation)
  })

  it('should have setVegetation method', () => {
    const biome = new Biome()

    expect(biome.setVegetation).toBeTruthy()
  })

  it('should set _vegetation when call setVegetation', () => {
    const biome = new Biome()
    const mockVegetation = ['tree']
    biome._vegetation = ['foo']
    biome.setVegetation(mockVegetation)

    expect(biome._vegetation).toEqual(mockVegetation)
  })

  it('should have getVegetationLength method', () => {
    const biome = new Biome()

    expect(biome.getVegetationLength).toBeTruthy()
  })

  it('should return _vegetation length when call getVegetationLength', () => {
    const biome = new Biome()
    biome._vegetation = ['tree']

    expect(biome.getVegetationLength()).toBe(1)
  })

  it('should have getVegetationLimit method', () => {
    const biome = new Biome()

    expect(biome.getVegetationLimit).toBeTruthy()
  })

  it('should return _vegetationLimit when call getVegetationLimit', () => {
    const biome = new Biome()
    biome._vegetationLimit = 100

    expect(biome.getVegetationLimit()).toBe(100)
  })

  it('should have setVegetationLimit method', () => {
    const biome = new Biome()

    expect(biome.setVegetationLimit).toBeTruthy()
  })

  it('should set _vegetationLimit when call setVegetationLimit', () => {
    const biome = new Biome()
    const mockVegetationLimit = 15
    biome._vegetationLimit = 10
    biome.setVegetationLimit(mockVegetationLimit)

    expect(biome._vegetationLimit).toEqual(mockVegetationLimit)
  })

  it('should have isVegetationOverVegetationLimit method', () => {
    const biome = new Biome()

    expect(biome.isVegetationOverVegetationLimit).toBeTruthy()
  })

  it('should detect when vegetation length is higher than _vegetationLimit', () => {
    const biome = new Biome()
    biome.setVegetation(['foo', 'bar', 'quz'])
    biome.setVegetationLimit(2)

    expect(biome.isVegetationOverVegetationLimit()).toBe(true)
  })

  it('should detect when vegetation length is not higher than _vegetationLimit', () => {
    const biome = new Biome()
    biome.setVegetation(['foo', 'bar', 'quz'])
    biome.setVegetationLimit(10)

    expect(biome.isVegetationOverVegetationLimit()).toBe(false)
  })

  it('should have getMinerals method', () => {
    const biome = new Biome()

    expect(biome.getMinerals).toBeTruthy()
  })

  it('should return _minerals when call getMinerals', () => {
    const biome = new Biome()
    const mineralsMock = ['gold']
    biome._minerals = mineralsMock

    expect(biome.getMinerals()).toEqual(mineralsMock)
  })

  it('should have setMinerals method', () => {
    const biome = new Biome()

    expect(biome.setMinerals).toBeTruthy()
  })

  it('should set _minerals when call setMinerals', () => {
    const biome = new Biome()
    const mockMinerals = ['gold']
    
    biome._minerals = ['silver']
    biome.setMinerals(mockMinerals)

    expect(biome._minerals).toEqual(mockMinerals)
  })

  it('should have getMineralsLength method', () => {
    const biome = new Biome()

    expect(biome.getMineralsLength).toBeTruthy()
  })

  it('should return _minerals length when call getMineralsLength', () => {
    const biome = new Biome()
    biome._minerals = ['gold']

    expect(biome.getMineralsLength()).toBe(1)
  })

  it('should have getMineralsLimit method', () => {
    const biome = new Biome()

    expect(biome.getMineralsLimit).toBeTruthy()
  })

  it('should return _mineralsLimit length when call getMineralsLimit', () => {
    const biome = new Biome()
    biome._mineralsLimit = 100

    expect(biome.getMineralsLimit()).toBe(100)
  })

  it('should have setMineralsLimit method', () => {
    const biome = new Biome()

    expect(biome.setMineralsLimit).toBeTruthy()
  })

  it('should set _mineralsLimit when call setMinerals', () => {
    const biome = new Biome()
    
    biome._mineralsLimit = 100
    biome.setMineralsLimit(5)

    expect(biome._mineralsLimit).toEqual(5)
  })

  it('should have isMineralsOverMineralsLimit method', () => {
    const biome = new Biome()

    expect(biome.isMineralsOverMineralsLimit).toBeTruthy()
  })

  it('should detect when minerals length is higher than _mineralsLimit', () => {
    const biome = new Biome()
    biome.setMinerals(['foo', 'bar', 'quz'])
    biome.setMineralsLimit(2)

    expect(biome.isMineralsOverMineralsLimit()).toBe(true)
  })

  it('should detect when minerals length is not higher than _mineralsLimit', () => {
    const biome = new Biome()
    biome.setMinerals(['foo', 'bar', 'quz'])
    biome.setMineralsLimit(10)

    expect(biome.isMineralsOverMineralsLimit()).toBe(false)
  })

  it('should have getAnimals method', () => {
    const biome = new Biome()

    expect(biome.getAnimals).toBeTruthy()
  })

  it('should return _animals when call getAnimals', () => {
    const biome = new Biome()
    const animalsMock = ['wolf']
    biome._animals = animalsMock

    expect(biome.getAnimals()).toBe(animalsMock)
  })

  it('should have setAnimals method', () => {
    const biome = new Biome()

    expect(biome.setAnimals).toBeTruthy()
  })

  it('should set _animals when call setAnimals', () => {
    const biome = new Biome()
    const expectedAnimalsMock = ['wolf']
    
    biome._animals = ['rabbit']
    biome.setAnimals(expectedAnimalsMock)

    expect(biome._animals).toEqual(expectedAnimalsMock)
  })

  it('should have getAnimalsLength method', () => {
    const biome = new Biome()

    expect(biome.getAnimalsLength).toBeTruthy()
  })

  it('should return animals length when call getAnimalsLength', () => {
    const biome = new Biome()
    biome._animals = ['wolf']

    expect(biome.getAnimalsLength()).toBe(1)
  })

  it('should have getAnimalsLimit method', () => {
    const biome = new Biome()

    expect(biome.getAnimalsLimit).toBeTruthy()
  })

  it('should return _animalsLimit when call getAnimalsLimit', () => {
    const biome = new Biome()
    biome._animalsLimit = 100

    expect(biome.getAnimalsLimit()).toBe(100)
  })

  it('should have setAnimalsLimit method', () => {
    const biome = new Biome()

    expect(biome.setAnimalsLimit).toBeTruthy()
  })

  it('should set _animalsLimit when call setAnimalsLimit', () => {
    const biome = new Biome()
    const expectedAnimalsLimitMock = 100
    
    biome._animalsLimit = 15
    biome.setAnimalsLimit(expectedAnimalsLimitMock)

    expect(biome._animalsLimit).toEqual(expectedAnimalsLimitMock)
  })

  it('should have isAnimalsOverAnimalsLimit method', () => {
    const biome = new Biome()

    expect(biome.isAnimalsOverAnimalsLimit).toBeTruthy()
  })

  it('should detect when animals length is higher than _animalsLimit', () => {
    const biome = new Biome()
    biome.setAnimals(['foo', 'bar', 'quz'])
    biome.setAnimalsLimit(2)

    expect(biome.isAnimalsOverAnimalsLimit()).toBe(true)
  })

  it('should detect when animals length is not higher than _animalsLimit', () => {
    const biome = new Biome()
    biome.setAnimals(['foo', 'bar', 'quz'])
    biome.setAnimalsLimit(10)

    expect(biome.isAnimalsOverAnimalsLimit()).toBe(false)
  })

  it('should have getContaminationIndex method', () => {
    const biome = new Biome()

    expect(biome.getContaminationIndex).toBeTruthy()
  })

  it('should return _contaminationIndex when call getContaminationIndex', () => {
    const biome = new Biome()
    biome._contaminationIndex = 100

    expect(biome.getContaminationIndex()).toBe(100)
  })

  it('should have setContaminationIndex method', () => {
    const biome = new Biome()

    expect(biome.setContaminationIndex).toBeTruthy()
  })

  it('should set _contaminationIndex when call setContaminationIndex', () => {
    const biome = new Biome()
    const expectedContaminationIndexMock = 100
    
    biome._contaminationIndex = 15
    biome.setContaminationIndex(expectedContaminationIndexMock)

    expect(biome._contaminationIndex).toEqual(expectedContaminationIndexMock)
  })

  it('should have getIsConstructable method', () => {
    const biome = new Biome()

    expect(biome.getIsConstructable).toBeTruthy()
  })

  it('should return _isConstructable when call getIsConstructable', () => {
    const biome = new Biome()
    biome._isConstructable = true

    expect(biome.getIsConstructable()).toBe(true)
  })

  it('should have setIsConstructable method', () => {
    const biome = new Biome()

    expect(biome.setIsConstructable).toBeTruthy()
  })

  it('should set _isConstructable when call setIsConstructable', () => {
    const biome = new Biome()
    const expectedIsConstructableMock = true
    
    biome._isConstructable = false
    biome.setIsConstructable(expectedIsConstructableMock)

    expect(biome._isConstructable).toEqual(expectedIsConstructableMock)
  })

  it('should have getBuildings method', () => {
    const biome = new Biome()

    expect(biome.getBuildings).toBeTruthy()
  })

  it('should return _buildings when call getBuildings', () => {
    const biome = new Biome()
    const mockBuildings = ['farm']
    biome._buildings = mockBuildings

    expect(biome.getBuildings()).toEqual(mockBuildings)
  })

  it('should have setBuildings method', () => {
    const biome = new Biome()

    expect(biome.setBuildings).toBeTruthy()
  })

  it('should set _buildings when call setBuildings', () => {
    const biome = new Biome()
    const expectedBuildingsMock = ['farm']
    
    biome._buildings = ['inn']
    biome.setBuildings(expectedBuildingsMock)

    expect(biome._buildings).toEqual(expectedBuildingsMock)
  })

  it('should have getBuildingsLength method', () => {
    const biome = new Biome()

    expect(biome.getBuildingsLength).toBeTruthy()
  })

  it('should return buildings length when call getBuildingsLength', () => {
    const biome = new Biome()
    biome._buildings = ['farm']

    expect(biome.getBuildingsLength()).toBe(1)
  })

  it('should have getBuildingsLimit method', () => {
    const biome = new Biome()

    expect(biome.getBuildingsLimit).toBeTruthy()
  })

  it('should return _buildingsLimit when call getBuildingsLimit', () => {
    const biome = new Biome()
    biome._buildingsLimit = 100

    expect(biome.getBuildingsLimit()).toBe(100)
  })

  it('should have setBuildingsLimit method', () => {
    const biome = new Biome()

    expect(biome.setBuildingsLimit).toBeTruthy()
  })

  it('should set _buildingsLimit when call setBuildingsLimit', () => {
    const biome = new Biome()
    const expectedBuildingsLimitMock = 123
    
    biome._buildingsLimit = 789
    biome.setBuildingsLimit(expectedBuildingsLimitMock)

    expect(biome._buildingsLimit).toEqual(expectedBuildingsLimitMock)
  })

  it('should have isBuildingsOverBuildingsLimit method', () => {
    const biome = new Biome()

    expect(biome.isBuildingsOverBuildingsLimit).toBeTruthy()
  })

  it('should detect when buildings length is higher than _buildingsLimit', () => {
    const biome = new Biome()
    biome.setBuildings(['foo', 'bar', 'quz'])
    biome.setBuildingsLimit(2)

    expect(biome.isBuildingsOverBuildingsLimit()).toBe(true)
  })

  it('should detect when buildings length is not higher than _buildingsLimit', () => {
    const biome = new Biome()
    biome.setBuildings(['foo', 'bar', 'quz'])
    biome.setBuildingsLimit(10)

    expect(biome.isBuildingsOverBuildingsLimit()).toBe(false)
  })

  it('should have getHumans method', () => {
    const biome = new Biome()

    expect(biome.getHumans).toBeTruthy()
  })

  it('should return _humans when call getHumans', () => {
    const biome = new Biome()
    const humansMock = ['Aragorn']
    biome._humans = humansMock

    expect(biome.getHumans()).toBe(humansMock)
  })

  it('should have setHumans method', () => {
    const biome = new Biome()

    expect(biome.setHumans).toBeTruthy()
  })

  it('should set _humans when call setHumans', () => {
    const biome = new Biome()
    const expectedHumansMock = ['Aragorn']
    
    biome._buildingsLimit = ['Gandalf']
    biome.setHumans(expectedHumansMock)

    expect(biome._humans).toEqual(expectedHumansMock)
  })

  it('should have getHumansLength method', () => {
    const biome = new Biome()

    expect(biome.getHumansLength).toBeTruthy()
  })

  it('should return humans length when call getHumansLength method', () => {
    const biome = new Biome()
    biome._humans = ['Frodo']

    expect(biome.getHumansLength()).toBe(1)
  })

  it('should have getHumansLimit method', () => {
    const biome = new Biome()

    expect(biome.getHumansLimit).toBeTruthy()
  })

  it('should return _humansLimit when call getHumansLimit', () => {
    const biome = new Biome()
    const expectedHumansLimitMock = 100
    biome._humansLimit = expectedHumansLimitMock

    expect(biome.getHumansLimit()).toBe(expectedHumansLimitMock)
  })

  it('should have setHumansLimit method', () => {
    const biome = new Biome()

    expect(biome.setHumansLimit).toBeTruthy()
  })

  it('should set _humansLimit when call setHumansLimit', () => {
    const biome = new Biome()
    const expectedHumansLimitMock = 123
    
    biome._humansLimit = 789
    biome.setHumansLimit(expectedHumansLimitMock)

    expect(biome._humansLimit).toEqual(expectedHumansLimitMock)
  })

  it('should have isHumansOverHumansLimit method', () => {
    const biome = new Biome()

    expect(biome.isHumansOverHumansLimit).toBeTruthy()
  })

  it('should detect when humans length is higher than _humansLimit', () => {
    const biome = new Biome()
    biome.setHumans(['foo', 'bar', 'quz'])
    biome.setHumansLimit(2)

    expect(biome.isHumansOverHumansLimit()).toBe(true)
  })

  it('should detect when humans length is not higher than _humansLimit', () => {
    const biome = new Biome()
    biome.setHumans(['foo', 'bar', 'quz'])
    biome.setHumansLimit(10)

    expect(biome.isHumansOverHumansLimit()).toBe(false)
  })

  it('should have getHasWaterSources method', () => {
    const biome = new Biome()

    expect(biome.getHasWaterSources).toBeTruthy()
  })

  it('should return _hasWaterSources value when call getHasWaterSources', () => {
    const expectedValue = true
    const biome = new Biome()

    biome._hasWaterSources = true

    expect(biome._hasWaterSources).toBe(expectedValue)
  })

  it('should have setHasWaterSources method', () => {
    const biome = new Biome()

    expect(biome.setHasWaterSources).toBeTruthy()
  })

  it('should set _hasWaterSources value when call setHasWaterSources', () => {
    const expectedValue = false
    const mockValueToBeOverridden = true
    const biome = new Biome()

    biome._hasWaterSources = mockValueToBeOverridden
    biome.setHasWaterSources(false)

    expect(biome._hasWaterSources).toBe(expectedValue)
  })

  it('should have getWaterSources method', () => {
    const biome = new Biome()

    expect(biome.getWaterSources).toBeTruthy()
  })

  it('should return _waterSources value when call getWaterSources', () => {
    const expectedValue = ['foo']
    const biome = new Biome()

    biome._waterSources = ['foo']

    expect(biome.getWaterSources()).toEqual(expectedValue)
  })

  it('should have setWaterSources method', () => {
    const biome = new Biome()

    expect(biome.setWaterSources).toBeTruthy()
  })

  it('should set _waterSources value when call setWaterSources', () => {
    const expectedValue = ['foo']
    const mockValueToBeOverridden = ['bar']
    const biome = new Biome()

    biome._waterSources = mockValueToBeOverridden
    biome.setWaterSources(['foo'])

    expect(biome._waterSources).toEqual(expectedValue)
  })

  it('should have getTemperature method', () => {
    const biome = new Biome()

    expect(biome.getTemperature).toBeTruthy()
  })

  it('should return _temperature value when call getTemperature', () => {
    const expectedValue = 10
    const biome = new Biome()

    biome._temperature = 10

    expect(biome.getTemperature()).toEqual(expectedValue)
  })

  it('should have setTemperature method', () => {
    const biome = new Biome()

    expect(biome.setTemperature).toBeTruthy()
  })

  it('should set _temperature value when call setTemperature', () => {
    const expectedValue = 10
    const mockValueToBeOverridden = 15
    const biome = new Biome()

    biome._temperature = mockValueToBeOverridden
    biome.setTemperature(10)

    expect(biome._temperature).toEqual(expectedValue)
  })
})

