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

declare class Deck {
  static get CARDS (): string[]
  static get SUITS (): Suit[]
  static get SUITS_COLOR (): SuitColor[]
  static get SUITS_UTF (): SuitUtf[]
  static get BLANK_CARD_UTF (): string

  constructor (preShuffle: boolean = true): void

  sort (cards: Card[]): Card[]

  getCards (amount: number): Card[]

  static stringify (cards: Card[]): string[]

  static parse (cards: string[]): Card[]

  static getSuitText (card: Card): string

  static getCardText (card: Card): string
}

export default Deck
