import calcFourOfAKind from './fourOfAKind';
import calcFullHouse from './fullHouse';
import calcFlush from './flush';
import calcStraight from './straight';
import calcThreeOfAKind from './threeOfAKind';
import pairCount from './pairCount'

let calculateHand = (cards) => {
  let valueCount = {}
  let suitCount = {}
  cards.forEach(card => {
    Object.keys(valueCount).includes(card.value) ? valueCount[card.value] += 1 : valueCount[card.value] = 1
    Object.keys(suitCount).includes(card.suit) ? suitCount[card.suit] += 1 : suitCount[card.suit] = 1
  })

  //calculate for four of a kind
  let fourOfAKind = calcFourOfAKind(valueCount);

  //calculate for full house
  let fullHouse = calcFullHouse(valueCount);

  //calculate for flush
  let flush = calcFlush(suitCount);

  //calculate for straight
  let straight = calcStraight(valueCount)

  //calculate for three of a kind
  let threeOfAKind = calcThreeOfAKind(valueCount);

  let twoPair;
  let onePair;
  let count = pairCount(valueCount);
  //calculate for two pair
  if(count == 2){ twoPair = true };

  //calculate for one pair
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
