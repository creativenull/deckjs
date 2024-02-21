export type Card = {
    id: number;
    value: string;
    rank: number;
    suit: Suit;
};
export type Suit = {
    value: string;
    color: string;
    utf: string;
};
export type SuitColor = "black" | "red";
export type SuitUtf = "\u2660" | "\u2665" | "\u2666" | "\u2663";
export type CardText = {
    [key: string]: string;
};
export type SuitText = CardText;
export declare class Deck {
    static get CARDS(): string[];
    static get CARDS_TEXT(): CardText;
    static get SUITS(): Suit[];
    static get SUITS_COLOR(): SuitColor[];
    static get SUITS_UTF(): SuitUtf[];
    static get SUITS_TEXT(): SuitText;
    static get BLANK_CARD_UTF(): string;
    private deck;
    private id;
    /**
     * Generate a new deck
     */
    constructor(preShuffle?: boolean);
    /**
     * Sort the cards
     *
     * @param {Card[]} cards
     *
     * @returns {Card[]}
     */
    sort(cards: Card[]): Card[];
    /**
     * Get a set amount of cards from the deck and remove them from the deck
     *
     * @param {number} amount
     *
     * @returns {Card[]}
     */
    getCards(amount: number): Card[];
    /**
     * Stringify an array of card objects in the format: {id}_{card}{suit}
     * Eg. ['23#AS', '4#3D', ...]
     *
     * @param {Card[]} cards
     *
     * @returns {string[]}
     */
    static stringify(cards: Card[]): string[];
    /**
     * Parse an array of serialized cards
     *
     * @param {string[]} cards
     *
     * @returns {Card[]}
     */
    static parse(cards: string[]): Card[];
    /**
     * Checks if the current object is a valid card type
     *
     * @param {Card} playingCard
     *
     * @returns {boolean}
     */
    static validate(playingCard: Card): boolean;
    /**
     * Return the word equivalent of the card value, if valid.
     * Else return empty string
     *
     * @param {Card} playingCard
     *
     * @returns {string}
     */
    static getCardText(playingCard: Card): string;
    /**
     * Return the word equivalent of the card suit, if valid.
     * Else return empty string
     */
    static getSuitText(playingCard: Card): string;
    /**
     * Return the description of the card, if valid.
     * Else return empty string
     *
     * @param {Card} playingCard
     *
     * @returns {string}
     */
    static getCardDescription(playingCard: Card): string;
}
