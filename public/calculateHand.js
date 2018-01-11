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

  let pair = pairCount(valueCount);
  //calculate for two pair
  //calculate for one pair

  if(flush && straight){
    if(straight == 'ACE-HIGH STRAIGHT'){
      return('ROYAL STRAIGHT FLUSH')
    } else {
      return(`${straight} FLUSH`)
    }
  } else if (fourOfAKind){
    return(fourOfAKind)
  } else if (fullHouse){
    return(fullHouse)
  } else if (flush && !straight){
    return(flush)
  } else if (!flush && straight){
    return(straight)
  } else if (threeOfAKind){
    return(threeOfAKind)
  } else if (pair){
    return(pair)
  } else {
    return('HIGH CARD')
  }
}

export default calculateHand;
