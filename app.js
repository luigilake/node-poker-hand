import fetch from 'node-fetch';

let drawnCards;

class Card {
  constructor(value, suit){
    this.value = value == 'ACE' ? 1 : value == 'JACK' ? 11 : value == 'QUEEN' ? 12 : value == 'KING' ? 13 : value;
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
      case 1:
        value = 'A'
        break;
      case 11:
        value = 'J'
        break;
      case 12:
        value = 'Q'
        break;
      case 13:
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

  //calculate for straight
  let straight = true;
  let values = Object.keys(valueCount).map( value => parseInt(value))
  let count = 0;
  values.sort((a, b) => { a - b }).reverse()
  for(let i = 0; i < values.length; i++){
    console.log(values[i] - values[i + 1])
    if(values[i] - values[i + 1] != 1 || values.length != 5){
      straight = false;
    }
  }
  

  if(flush && straight){
    return('STRAIGHT FLUSH')
  } else if (flush && !straight){
    return('FLUSH')
  } else if (!flush && straight){
    return('STRAIGHT')
  }
}

drawCards()
console.log('*** DECK OBTAINED ***')
setTimeout(() => {console.log('*** DECK SHUFFLED ***')}, 1000);
setTimeout(() => {console.log('*** DRAW 5 CARDS ***')}, 2000);
setTimeout(() => {console.log('YOUR CARDS:')}, 3000);
setTimeout(() => {presentCards(drawnCards)}, 3000);
setTimeout(() => {console.log(`YOUR SCORE:`)}, 4000);
setTimeout(() => {console.log(calculateHand(drawnCards))}, 4000);
