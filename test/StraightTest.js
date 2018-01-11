import { expect } from 'chai';
import calcStraight from '../public/straight';

let data = {
  successAceHigh: {
    '13': 1,
    '12': 1,
    '11': 1,
    '10': 1,
    '1': 1
  },
  successFaceHigh: {
    '12': 1,
    '11': 1,
    '10': 1,
    '9': 1,
    '8': 1
  },
  successNumHigh: {
    '8': 1,
    '7': 1,
    '6': 1,
    '5': 1,
    '4': 1
  },
  successAceLow: {
    '5': 1,
    '4': 1,
    '3': 1,
    '2': 1,
    '1': 1
  },
  failOnePair: {
    '13': 1,
    '12': 1,
    '11': 1,
    '10': 2
  },
  failTwoPair: {
    '13': 1,
    '11': 2,
    '10': 2
  },
  failThreeOfAKind: {
    '13': 1,
    '12': 1,
    '11': 3
  },
  failFullHouse: {
    '9': 3,
    '8': 2
  },
  failFourOfAKind: {
    '9': 4,
    '8': 1
  },
  failIncomplete: {
    '13': 2,
    '10': 1,
  },
  null: {}
}

describe('calcStraight', () => {

  it('should return ACE-HIGH STRAIGHT', () => {
    expect(calcStraight(data.successAceHigh)).to.equal(`ACE-HIGH STRAIGHT`);
  })

  it('should return Q-HIGH STRAIGHT', () => {
    expect(calcStraight(data.successFaceHigh)).to.equal(`Q-HIGH STRAIGHT`);
  })

  it('should return 8-HIGH STRAIGHT', () => {
    expect(calcStraight(data.successNumHigh)).to.equal(`8-HIGH STRAIGHT`);
  })

  it('should return 5-HIGH STRAIGHT', () => {
    expect(calcStraight(data.successAceLow)).to.equal(`5-HIGH STRAIGHT`);
  })

  it('should return false (one pair)', () => {
    expect(calcStraight(data.failOnePair)).to.equal(false);
  })

  it('should return false (two pair)', () => {
    expect(calcStraight(data.failTwoPair)).to.equal(false);
  })

  it('should return false (three of a kind)', () => {
    expect(calcStraight(data.failThreeOfAKind)).to.equal(false);
  })

  it('should return false (full house)', () => {
    expect(calcStraight(data.failFullHouse)).to.equal(false);
  })

  it('should return false (four of a kind)', () => {
    expect(calcStraight(data.failFourOfAKind)).to.equal(false);
  })

  it('should return false (incomplete)', () => {
    expect(calcStraight(data.failIncomplete)).to.equal(false);
  })

  it('should return false (null)', () => {
    expect(calcStraight(data.null)).to.equal(false);
  })

})
