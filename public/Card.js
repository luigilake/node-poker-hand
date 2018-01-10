class Card {
  constructor(value, suit){
    this.value = value == 'ACE' ? '1' : value == 'JACK' ? '11' : value == 'QUEEN' ? '12' : value == 'KING' ? '13' : value;
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
      case '1':
        value = 'A'
        break;
      case '11':
        value = 'J'
        break;
      case '12':
        value = 'Q'
        break;
      case '13':
        value = 'K'
        break;
      default:
        value = this.value
    }
    return(`${value}${suit}`)
  }
}

export default Card;
