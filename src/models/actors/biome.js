class Biome {
  constructor() {
    this._isCultivable = undefined
    this._cultivableIndex = undefined
    this._cultivableDegradation = undefined
    this._cultivableRegeneration = undefined
    this._vegetation = undefined
    this._vegetationLimit = undefined
    this._minerals = undefined
    this._mineralsLimit = undefined
    this._animals = undefined
    this._animalsLimit = undefined
    this._contaminationIndex = undefined
    this._isConstructable = undefined
    this._buildings = undefined
    this._buildingsLimit = undefined
    this._humans = undefined
    this._humansLimit = undefined
    this._hasWaterSources = undefined
    this._waterSources = undefined
    this._temperature = undefined
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

  getHumans() {
    return this._humans
  }

  setHumans(humans) {
    return this._humans = humans
  }

  getHumansLength() {
    return this._humans.length
  }

  getHumansLimit() {
    return this._humansLimit
  }

  setHumansLimit(humansLimit) {
    this._humansLimit = humansLimit
  }

  isHumansOverHumansLimit() {
    return this.getHumansLength() > this.getHumansLimit()
  }

  getHasWaterSources() {
    return this._hasWaterSources
  }

  setHasWaterSources(hasWaterSources) {
    this._hasWaterSources = hasWaterSources
  }

  getWaterSources() {
    return this._waterSources
  }

  setWaterSources(waterSources) {
    this._waterSources = waterSources
  }

  getTemperature() {
    return this._temperature
  }

  setTemperature(temperature) {
    this._temperature = temperature
  }
}

module.exports = Biome
