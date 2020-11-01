export type Card = {
  id: number;
  value: string;
  rank: number;
  suit: Suit;
}

export type Suit = {
  value: string;
  color: string;
  utf: string;
}

export type SuitColor = 'black' | 'red'
export type SuitUtf = '\u2660' | '\u2665' | '\u2666' | '\u2663'

export type CardText = {
  [key: string]: string;
}

export type SuitText = CardText

declare class Deck {
  static get CARDS (): string[]
  static get SUITS (): Suit[]
  static get SUITS_COLOR (): SuitColor[]
  static get SUITS_UTF (): SuitUtf[]
  static get BLANK_CARD_UTF (): string

  /**
   * Generate a new deck
   *
   * @param {boolean} preShuffle Shuffle the deck on initialization
   */
  constructor (preShuffle: boolean = true): void

  /**
   * Sort the cards
   *
   * @param {Card[]} cards
   *
   * @return {Card[]}
   */
  sort (cards: Card[]): Card[]

  /**
   * Get a set amount of cards from the deck and remove them from the deck
   *
   * @param {number} amount
   *
   * @returns {Card[]}
   */
  getCards (amount: number): Card[]

  /**
   * Stringify an array of card objects in the format: {id}_{card}{suit}
   * Eg. ['23#AS', '4#3D', ...]
   *
   * @param {Card[]} cards
   *
   * @returns {string[]}
   */
  static stringify (cards: Card[]): string[]

  /**
   * Parse an array of serialized cards
   *
   * @param {string[]} cards
   *
   * @returns {Card[]}
   */
  static parse (cards: string[]): Card[]

  /**
   * Return the word equivalent of the card suit
   *
   * @param {Card} playingCard
   *
   * @returns {string}
   */
  static getSuitText (card: Card): string

  /**
   * Return the word equivalent of the card value
   *
   * @param {Card} playingCard
   *
   * @returns {string}
   */
  static getCardText (card: Card): string
}

export default Deck
