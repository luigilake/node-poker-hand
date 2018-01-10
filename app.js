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

let calculateHand = (cards) => {
  let valueCount = {}
  let suitCount = {}
  cards.forEach(card => {
    Object.keys(valueCount).includes(card.value) ? valueCount[card.value] += 1 : valueCount[card.value] = 1
    Object.keys(suitCount).includes(card.suit) ? suitCount[card.suit] += 1 : suitCount[card.suit] = 1
  })

  //calculate for flush
  let flush;
  if(Object.keys(suitCount).length === 1){
    flush = true;
  }

  return(Object.keys(suitCount).length)
}

drawCards()
console.log('*** DECK OBTAINED ***')
setTimeout(() => {console.log('*** DECK SHUFFLED ***')}, 1000);
setTimeout(() => {console.log('*** DRAW 5 CARDS ***')}, 2000);
setTimeout(() => {console.log('YOUR CARDS:')}, 3000);
setTimeout(() => {presentCards(drawnCards)}, 3000);
setTimeout(() => {console.log(`YOUR SCORE:`)}, 4000);
setTimeout(() => {console.log(calculateHand(drawnCards))}, 4000);
