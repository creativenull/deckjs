const Deck = require('./index')

describe('Module Test', () => {
  test('Import the module', () => {
    const deck = new Deck()
    const amount = 2
    const cards = deck.getCards(amount)

    expect(cards.length).toBe(amount)
  })
})
