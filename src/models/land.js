class Land {
  constructor() {
    this._isCultivable = true
    this._cultivableIndex = 50
    this._cultivableDegradation = 1
    this._cultivableRegeneration = 1
    this._vegetation = []
    this._vegetationLimit = 10 
    this._minerals = []
    this._mineralsLimit = 10
    this._animals = []
    this._animalsLimit = 10
    this._contaminationIndex = 0
    this._isConstructable = true
    this._buildings = []
    this._buildingsLimit = []
    //untested
    this._isHumanHabitable = true
    this._humans = []
    this._humansLimit = 10
  }

  getIsCultivable() {
    return this._isCultivable
  }

  setIsCultivable(isCultivable) {
    this._isCultivable = isCultivable
  }
  
  getCultivableDegradation() {
    return this._cultivableDegradation
  }

  setCultivableDegradation(cultivableDegradation) {
    this._cultivableDegradation = cultivableDegradation
  }

  getCultivableRegeneration() {
    return this._cultivableRegeneration
  }

  setCultivableRegeneration(cultivableRegeneration) {
    this._cultivableRegeneration = cultivableRegeneration
  }

  getVegetation() {
    return this._vegetation
  }

  setVegetation(vegetation) {
    this._vegetation = vegetation
  }

  getVegetationLength() {
    return this._vegetation.length
  }

  getVegetationLimit() {
    return this._vegetationLimit
  }

  setVegetationLimit(vegetationLimit) {
    this._vegetationLimit  = vegetationLimit
  }

  isVegetationOverVegetationLimit() {
    return this.getVegetationLength() > this.getVegetationLimit()
  }

  getMinerals() {
    return this._minerals
  }

  setMinerals(minerals) {
    this._minerals = minerals
  }

  getMineralsLength() {
    return this._minerals.length
  }

  getMineralsLimit() {
    return this._mineralsLimit
  }

  setMineralsLimit(mineralsLimit) {
    this._mineralsLimit = mineralsLimit
  }

  isMineralsOverMineralsLimit() {
    return this.getMineralsLength() > this.getMineralsLimit()
  }

  getAnimals() {
    return this._animals
  }

  setAnimals(animals) {
    this._animals = animals
  }

  getAnimalsLength() {
    return this._animals.length
  }

  getAnimalsLimit() {
    return this._animalsLimit
  }

  setAnimalsLimit(animalsLimit) {
    this._animalsLimit = animalsLimit
  }

  isAnimalsOverAnimalsLimit() {
    return this.getAnimalsLength() > this.getAnimalsLimit()
  }

  getContaminationIndex() {
    return this._contaminationIndex
  }

  setContaminationIndex(contaminationIndex) {
    this._contaminationIndex = contaminationIndex
  }

  getIsConstructable() {
    return this._isConstructable
  }

  setIsConstructable(isConstructable) {
    this._isConstructable = isConstructable
  }

  getBuildings() {
    return this._buildings
  }

  setBuildings(buildings) {
    this._buildings = buildings
  }

  getBuildingsLength() {
    return this._buildings.length
  }
  
  getBuildingsLimit() {
    return this._buildingsLimit
  }

  setBuildingsLimit(buildingsLimit) {
    this._buildingsLimit = buildingsLimit
  }

  isBuildingsOverBuildingsLimit() {
    return this.getBuildingsLength() > this.getBuildingsLimit()
  }
}

module.exports = Land
