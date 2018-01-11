import { expect } from 'chai';
import calculateHand from '../public/calculateHand';
import data from './CalculatorData'

describe('calculateHand', () => {
  it('should return ROYAL STRAIGHT FLUSH', () => {
    expect(calculateHand(data.royalStraightFlush)).to.equal('ROYAL STRAIGHT FLUSH');
  })

  it('should return K-HIGH STRAIGHT FLUSH', () => {
    expect(calculateHand(data.kHighStraightFlush)).to.equal('K-HIGH STRAIGHT FLUSH');
  })

  it('should return 5-HIGH STRAIGHT FLUSH', () => {
    expect(calculateHand(data.fiveHighStraightFlush)).to.equal('5-HIGH STRAIGHT FLUSH');
  })

  it('should return FOUR OF A KIND, J', () => {
    expect(calculateHand(data.fourOfAKindFace)).to.equal('FOUR OF A KIND, J');
  })

  it('should return FOUR OF A KIND, 7', () => {
    expect(calculateHand(data.fourOfAKindNum)).to.equal('FOUR OF A KIND, 7');
  })

  it('should return FULL HOUSE, QS OVER AS', () => {
    expect(calculateHand(data.fullHouseFaces)).to.equal('FULL HOUSE, QS OVER AS');
  })

  it('should return FULL HOUSE, KS OVER 2S', () => {
    expect(calculateHand(data.fullHouseFaceNum)).to.equal('FULL HOUSE, KS OVER 2S');
  })

  it('should return FULL HOUSE, 8S OVER 3S', () => {
    expect(calculateHand(data.fullHouseNums)).to.equal('FULL HOUSE, 8S OVER 3S');
  })

  it('should return FLUSH (two pair)', () => {
    expect(calculateHand(data.flushTwoPair)).to.equal('FLUSH');
  })

  it('should return FLUSH (one pair)' , () => {
    expect(calculateHand(data.flushOnePair)).to.equal('FLUSH');
  })

  it('should return FLUSH' , () => {
    expect(calculateHand(data.flush)).to.equal('FLUSH');
  })

  it('should return ACE-HIGH STRAIGHT' , () => {
    expect(calculateHand(data.straightAceHigh)).to.equal('ACE-HIGH STRAIGHT');
  })

  it('should return 5-HIGH STRAIGHT' , () => {
    expect(calculateHand(data.straightFiveHigh)).to.equal('5-HIGH STRAIGHT');
  })

  it('should return Q-HIGH STRAIGHT' , () => {
    expect(calculateHand(data.straightQueenHigh)).to.equal('Q-HIGH STRAIGHT');
  })

  it('should return THREE OF A KIND, QS' , () => {
    expect(calculateHand(data.threeOfAKindFace)).to.equal('THREE OF A KIND, QS');
  })

  it('should return THREE OF A KIND, 7S' , () => {
    expect(calculateHand(data.threeOfAKindNum)).to.equal('THREE OF A KIND, 7S');
  })

  it('should return TWO PAIR, QS AND JS' , () => {
    expect(calculateHand(data.twoPairFace)).to.equal('TWO PAIR, QS AND JS');
  })

  it('should return TWO PAIR, QS AND 7S' , () => {
    expect(calculateHand(data.twoPairFaceNum)).to.equal('TWO PAIR, QS AND 7S');
  })

  it('should return TWO PAIR, 7S AND 2S' , () => {
    expect(calculateHand(data.twoPairNums)).to.equal('TWO PAIR, 7S AND 2S');
  })

  it('should return ONE PAIR, JS' , () => {
    expect(calculateHand(data.onePairFace)).to.equal('ONE PAIR, JS');
  })

  it('should return ONE PAIR, 2S' , () => {
    expect(calculateHand(data.onePairNum)).to.equal('ONE PAIR, 2S');
  })

  it('should return HIGH CARD' , () => {
    expect(calculateHand(data.highCard1)).to.equal('HIGH CARD');
  })

  it('should return HIGH CARD' , () => {
    expect(calculateHand(data.highCard2)).to.equal('HIGH CARD');
  })

  it('should return HIGH CARD' , () => {
    expect(calculateHand(data.highCard3)).to.equal('HIGH CARD');
  })

  it('should return HIGH CARD' , () => {
    expect(calculateHand(data.highCard4)).to.equal('HIGH CARD');
  })
})
