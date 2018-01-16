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
    return(cards)
  })
  .then(cards => {
    console.log('*** DECK OBTAINED ***\n*** DECK SHUFFLED ***\n*** DRAW 5 CARDS ***');
    presentCards(cards);
    console.log(`TOP POKER HAND: ${calculateHand(cards)}`)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}

drawCards();
