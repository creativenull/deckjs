# Deck.js
A simple card deck library written in JavaScript.

## Installation
To install in your project

```sh
npm i @creativenull/deckjs
# OR
yarn add @creativenull/deckjs
```

## Test
To run test

```sh
npm run test
# OR
yarn test
```

# Documentation
## Create a new deck
Create a newly shuffled deck

```js
const deck = new Deck();
```

You can create a clean sorted deck by passing `false` as the `preShuffle` param,
or use the `sort` method

```js
const deck = new Deck(false);

// Or use sort
const sortedDeck = deck.sort();
```

## Get cards from the deck
Get the cards from the deck by calling the `getCards` method and providing an amount.
If no amount was given then it will return an empty array.

```js
// Get 5 cards from the deck
const cards = deck.getCards(5);
```

## Serialize/Deserialize cards
If you want to pass the cards around different components and but want to pass data without
the heavy object array, you can serialize it and then parse it later on.

Use the static methods to stringify/parse the cards. Note: we are using the class name `Deck`
and not `deck` the variable that holds the class instance.

```js
// make the cards an array of strings
const cardsSerialize = Deck.stringify(cards);

// parse the array of string back to the objects
const cardsParsed = Deck.parse(cardsSerialize);
```

## Get Text instance of a card
Using the card object we can get the text equivalent of a card.

```js
const oneCard = deck.getCards(1);
const cardText = Deck.getCardText(oneCard); // 'Four'
```

We can get the Suit text as well.

```js
const suitText = Deck.getSuitText(oneCard); // 'Spades'
```

And finally we can get the card description.

```js
const cardDesc = Deck.getCardDescription(oneCard); // 'Four of Spades'
```
