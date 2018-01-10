let calculateHand = (cards) => {
  let valueCount = {}
  let suitCount = {}
  cards.forEach(card => {
    Object.keys(valueCount).includes(card.value) ? valueCount[card.value] += 1 : valueCount[card.value] = 1
    Object.keys(suitCount).includes(card.suit) ? suitCount[card.suit] += 1 : suitCount[card.suit] = 1
  })

  //calculate for four of a kind
  let fourOfAKind;
  if(Object.values(valueCount).includes(4)){
    fourOfAKind = true;
  }

  //calculate for full house
  let fullHouse;
  if(Object.values(valueCount).includes(3) && Object.values(valueCount).includes(2)){
    fullHouse = true
  }

  //calculate for flush
  let flush;
  if(Object.keys(suitCount).length === 1){
    flush = true;
  }

  //calculate for straight
  let straight = true;
  let values = Object.keys(valueCount).map( value => parseInt(value))
  values.sort((a, b) => { a - b }).reverse();
  for(let i = 0; i < values.length - 1; i++){
    if(values[i] - values[i + 1] != 1 || values.length != 5){
      straight = false;
    }
  }

  //calculate for three of a kind
  let threeOfAKind;
  if(Object.values(valueCount).includes(3) && !Object.values(valueCount).includes(2)){
    threeOfAKind = true;
  }

  //calculate for two pair
  let twoPair;
  let count = 0;
  Object.values(valueCount).forEach(value => {
    if(value == 2){ count += 1 };
  });
  if(count == 2){ twoPair = true };

  //calculate for one pair
  let onePair;
  if(count == 1){ onePair = true };

  if(flush && straight){
    return('STRAIGHT FLUSH')
  } else if (fourOfAKind){
    return('FOUR OF A KIND')
  } else if (fullHouse){
    return('FULL HOUSE')
  } else if (flush && !straight){
    return('FLUSH')
  } else if (!flush && straight){
    return('STRAIGHT')
  } else if (threeOfAKind){
    return('THREE OF A KIND')
  } else if (twoPair){
    return('TWO PAIR')
  } else if (onePair){
    return('ONE PAIR')
  } else {
    return('HIGH CARD')
  }
}

export default calculateHand;
