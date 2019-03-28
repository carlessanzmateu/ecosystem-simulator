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

  it('should return timeToDeath when call getTimeToDeath', () => {
    const animal = new Animal()
    const expectedTimeToDeath = 10
    animal._timeToDeath = 10

    expect(animal.getTimeToDeath()).toBe(expectedTimeToDeath)
  })

  it('should have setTimeToDeath method', () => {
    const animal = new Animal()

    expect(animal.setTimeToDeath).toBeTruthy()
  })

  it('should set timeToDeath when call setTimeToDeath', () => {
    const animal = new Animal()
    const initialTimeToDeath = 10
    const expectedTimeToDeath = 100

    animal._timeToDeath = initialTimeToDeath
    animal.setTimeToDeath(100)

    expect(animal._timeToDeath).toBe(expectedTimeToDeath)
  })
})