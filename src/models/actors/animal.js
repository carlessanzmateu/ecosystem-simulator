class Animal {
  constructor() {
    this._timeToDeath = undefined
    this._gender = undefined
    this._isFertile = undefined
    this._energyIndex = undefined
    this._hungryIndex = undefined
    this._diseases = []
    this._wounds = []
    this._isPregnant = undefined
    this._breedings = []
  }

  getTimeToDeath() {
    return this._timeToDeath
  }

  setTimeToDeath(timeToDeath) {
    this._timeToDeath = timeToDeath
  }
  
  getGender() {
    return this._gender
  }

  setGender(gender) {
    this._gender = gender
  }

  getIsFertile() {
    return this._isFertile
  }

  setIsFertile(isFertile) {
    this._isFertile = isFertile
  }

  getEnergyIndex() {
    return this._energyIndex
  }

  setEnergyIndex(energyIndex) {
    this._energyIndex = energyIndex
  }

  getHungryIndex() {
    return this._hungryIndex
  }

  setHungryIndex(hungryIndex) {
    this._hungryIndex = hungryIndex
  }

  getDiseases() {
    return this._diseases
  }

  setDiseases(diseases) {
    this._diseases = diseases
  }
  
  getWounds() {
    return this._wounds
  }

  setWounds(wounds) {
    this._wounds = wounds
  }

  getIsPregnant() {
    return this._isPregnant
  }

  setIsPregnant(isPregnant) {
    this._isPregnant = isPregnant
  }

  getBreedings() {
    return this._breedings
  }

  setBreedings(breedings) {
    this._breedings = breedings
  }

  eat(hungryDecreasement, energyIncreasement) {
    const actualHungryIndex = this.getHungryIndex()
    const hungryIndexAfterEat = actualHungryIndex - hungryDecreasement
    const newHungryIndex = hungryIndexAfterEat < 0 ? 0 : hungryIndexAfterEat
    this.setHungryIndex(newHungryIndex)

    const actualEnergyIndex = this.getEnergyIndex()
    const energyIndexAfterEat = actualEnergyIndex + energyIncreasement
    const newEnergyIndex = energyIndexAfterEat > 100 ? 100 : energyIndexAfterEat

    this.setEnergyIndex(newEnergyIndex)
  }

  sleep() {}
  rest() {}
  run() {}
  walk() {}
  reproduce() {}
}

module.exports = Animal
