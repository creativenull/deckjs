const shuffle = require('lodash.shuffle')

class Deck {
  static get CARDS () {
    return ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  }

  static get CARDS_TEXT () {
    return {
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      10: 'Ten',
      J: 'Jack',
      Q: 'Queen',
      K: 'King',
      A: 'Ace'
    }
  }

  static get SUITS () {
    return [
      {
        value: 'S',
        color: 'black',
        utf: '\u2660'
      },
      {
        value: 'H',
        color: 'red',
        utf: '\u2665'
      },
      {
        value: 'D',
        color: 'red',
        utf: '\u2666'
      },
      {
        value: 'C',
        color: 'black',
        utf: '\u2663'
      }
    ]
  }

  static get SUITS_COLOR () {
    return ['black', 'red', 'red', 'black']
  }

  static get SUITS_UTF () {
    return ['\u2660', '\u2665', '\u2666', '\u2663']
  }

  static get SUITS_TEXT () {
    return {
      S: 'Spades',
      H: 'Hearts',
      D: 'Diamonds',
      C: 'Clubs'
    }
  }

  static get BLANK_CARD_UTF () {
    return '\u2605'
  }

  /**
   * Generate a new deck
   *
   * @param {boolean} preShuffle Shuffle the deck on initialization
   */
  constructor (preShuffle = true) {
    this._deck = []
    this._id = 0

    // Fill the deck
    for (let j = 0; j < Deck.SUITS.length; j++) {
      for (let i = 0; i < Deck.CARDS.length; i++) {
        this._deck.push({
          id: this._id++,
          value: Deck.CARDS[i],
          rank: i + 1,
          suit: { ...Deck.SUITS[j] }
        })
      }
    }

    // Shuffle by default
    if (preShuffle) {
      this._deck = shuffle(this._deck)
    }
  }

  /**
   * Sort the cards
   */
  sort (cards) {
    return cards.sort((a, b) => b.rank - a.rank)
  }

  /**
   * Get a set amount of cards from the deck and remove them from the deck
   */
  getCards (amount) {
    if (amount >= 1 && amount < (this._deck.length - amount)) {
      const removedCards = []
      for (let i = 0; i < amount; i++) {
        removedCards.push(this._deck.shift())
      }
      return removedCards
    } else {
      return []
    }
  }

  /**
   * Stringify an array of card objects in the format: {id}_{card}{suit}
   * Eg. ['23#AS', '4#3D', ...]
   */
  static stringify (cards) {
    return cards.map(card => `${card.id}#${card.value}${card.suit.value}`)
  }

  /**
   * Parse an array of serialized cards
   */
  static parse (cards) {
    return cards.map(c => {
      // Get the card and id by spliting string
      // Assuming the string format: '{id}#{card}{suit}'
      const [id, card] = c.split('#')
      const value = card.length === 3 ? '10' : card[0] // with 10 we get string of length 3
      const rank = Deck.CARDS.indexOf(value) + 1
      const suitValue = card.length === 3 ? card[2] : card[1]
      const suit = Deck.SUITS.find((suit) => suit.value === suitValue)

      return {
        id: parseInt(id),
        value,
        rank,
        suit
      }
    })
  }

  /**
   * Return the word equivalent of the card suit
   */
  static getSuitText (playingCard) {
    return this.SUITS_TEXT[playingCard.suit.value]
  }

  /**
   * Return the word equivalent of the card value
   */
  static getCardText (playingCard) {
    return this.CARDS_TEXT[playingCard.value]
  }
}

module.exports = Deck
