import fetch from 'node-fetch';

let drawnCards;

class Card {
  constructor(value, suit){
    this.value = value;
    this.suit = suit;
  }

  printCard(){
    let suit;
    let value;
    switch(this.suit){
      case 'HEARTS':
        suit = '♥'
        break;
      case 'SPADES':
        suit = '♠'
        break;
      case 'CLUBS':
        suit = '♣'
        break;
      case 'DIAMONDS':
        suit = '♦'
        break;
    }

    switch(this.value){
      case 'ACE':
        value = 'A'
        break;
      case 'JACK':
        value = 'J'
        break;
      case 'QUEEN':
        value = 'Q'
        break;
      case 'KING':
        value = 'K'
        break;
      default:
        value = this.value
    }
    return(`${value}${suit}`)
  }
}


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
}

let presentCards = (cards) => {
  cards.forEach( card => {
    console.log(` - ${card.printCard()}`)
  })
}

drawCards()
console.log('*** DECK OBTAINED ***')
setTimeout(() => {console.log('*** DECK SHUFFLED ***')}, 1000);
setTimeout(() => {console.log('*** DRAW 5 CARDS ***')}, 2000);
setTimeout(() => {console.log('YOUR CARDS:')}, 3000);
setTimeout(() => {presentCards(drawnCards)}, 3000);
