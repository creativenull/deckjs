# Deck.js

A simple card deck library written in TypeScript.

## Installation

```sh
npm install @creativenull/deckjs
```

### Deno

```ts
import { Deck } from "jsr:@creativenull/deckjs@2"
```

## Test

```sh
npm run test
```

# Documentation

## Create a new deck

Create a newly shuffled deck

```ts
import { Deck } from "@creativenull/deckjs"

const deck = new Deck();
```

By default, you get a shuffled deck, to get a sorted deck pass `false` when
creating new `Deck` or call `deck.sort()`.

```ts
import { Deck } from "@creativenull/deckjs"

// Sorted deck
const deck = new Deck(false);

// OR
const sortedDeck = deck.sort();
```

## Get cards from the deck

Get the cards from the deck by calling the `getCards` method and providing an amount.
If no amount was given then it will return an empty array.

```ts
// Get 5 cards from the deck
const cards = deck.getCards(5); // [{ id: 22, value: '8', rank: 8, suit: {...} }, ...]
```

## Serialize/Deserialize cards

If you want to pass the cards around different components and but want to pass data without
the heavy object array, you can serialize it and then parse it later on.

Use the static methods to stringify/parse the cards. Note: we are using the class name `Deck`
and not a class instance.

```ts
// Serialize/Stringify
const cardsSerialize = Deck.stringify(cards); // ['22#8H', '99#3D', ...]

// Deserialize/Parse
const cardsParsed = Deck.parse(cardsSerialize);
// output: [{ id: 22, value: '8', rank: 8, suit: {...} }, {...}, ...]
```

## Get Text instance of a card

Using the card object we can get the text equivalent of a card.

```ts
const oneCard = deck.getCards(1);
const cardText = Deck.getCardText(oneCard); // 'Four'
```

We can get the Suit text as well.

```ts
const suitText = Deck.getSuitText(oneCard); // 'Spades'
```

And finally we can get the card description.

```ts
const cardDesc = Deck.getCardDescription(oneCard); // 'Four of Spades'
```
