import fetch from 'node-fetch';
import Card from './public/Card'
import presentCards from './public/presentCards'
import calculateHand from './public/calculateHand'

let drawnCards;

let drawCards = () => {
  fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=5`)
  .then(response => response.json())
  .then(response => {
    let cards = response.cards.map( card => {
      return(
        new Card(card.value, card.suit)
      )
    })
    drawnCards = cards
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}

drawCards()
console.log('*** DECK OBTAINED ***')
setTimeout(() => {console.log('*** DECK SHUFFLED ***')}, 1000);
setTimeout(() => {console.log('*** DRAW 5 CARDS ***')}, 2000);
setTimeout(() => {console.log('YOUR CARDS:')}, 3000);
setTimeout(() => {presentCards(drawnCards)}, 3000);
setTimeout(() => {console.log(`TOP POKER HAND: ${calculateHand(drawnCards)}`)}, 4000);
