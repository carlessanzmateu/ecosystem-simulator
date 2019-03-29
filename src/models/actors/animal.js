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

  getIsFertile() {}
  setIsFertile() {}
  getEnergyIndex() {}
  setEnergyIndex() {}
  getHungryIndex() {}
  setHungryIndex() {}
  getDiseases() {}
  setDiseases() {}
  getWounds() {}
  setWounds() {}
  getIsPregnant() {}
  setIsPregnant() {}
  getBreedings() {}
  setBreedings() {}
  eat() {}
  sleep() {}
  rest() {}
  run() {}
  walk() {}
  reproduce() {}
}

module.exports = Animal
