# node-poker-hand
This is a simple node.js app that uses the `https://deckofcardsapi.com/` api to access a deck of cards.

---
## Instructions
* Install **Node.js**
* In a terminal, run `git clone https://github.com/luigilake/node-poker-hand.git`
* Navigate to the project's root directory with `cd node-poker-hand`
* run `npm install`
* to start the app, run `npm start`
* to start the tests, run `npm test`
---
## Assumptions
* `https://deckofcardsapi.com/` provides a deck of 52 cards, meaning that there are **no joker** cards.
* The app always draws **5** cards from the deck.
* **A** (ace) face cards can work as both in an ace-high `(A♥, K♠, Q♥, J♣, 10♦ *is an* ace-high straight)` or in a 5-high `(5♥, 4♠, 3♥, 2♣, A♦ is a 5-high straight)`.
