const Animal = require('../animal.js')

describe('Animal', () => {
  it('should be created', () => {
    const animal = new Animal()

    expect(animal).toBeTruthy()
  })
})