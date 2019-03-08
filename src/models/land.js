class Land {
  constructor() {
    this._isCultivable = true
    this._cultivableIndex = 50
    this._cultivableDegradation = 1
    this._cultivableRegeneration = 1
    this._vegetation = []
    this._vegetationLimit = 10 
    this._minerals = []
    //untested
    this._mineralsLimit = 10
    this._animals = []
    this._animalsLimit = 10
    this._contaminationIndex = 0
    this._isConstructable = true
    this._buildings = []
    this._buildingsLimit = []
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
    return this.getVegetationLength() > this._vegetationLimit
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
}

module.exports = Land
