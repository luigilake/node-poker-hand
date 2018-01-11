import { expect } from 'chai';
import calcThreeOfAKind from '../public/threeOfAKind';

let data = {
  successFace: {
    '13': 3,
    '12': 1,
    '11': 1
  },
  successNumAce: {
    '3': 3,
    '2': 1,
    '1': 1
  },
  successNum: {
    '9': 3,
    '7': 1,
    '8': 1
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
  failFullHouse: {
    '9': 3,
    '8': 2
  },
  failFourOfAKind: {
    '9': 4,
    '8': 1
  },
  failStraight: {
    '12': 1,
    '11': 1,
    '10': 1,
    '9': 1,
    '8': 1
  },
  failIncomplete: {
    '13': 2,
    '10': 1,
  },
  null: {}
}

describe('calcThreeOfAKind', () => {

  it('should return THREE OF A KIND, KS', () => {
    expect(calcThreeOfAKind(data.successFace)).to.equal(`THREE OF A KIND, KS`);
  })

  it('should return THREE OF A KIND, 3S', () => {
    expect(calcThreeOfAKind(data.successNumAce)).to.equal(`THREE OF A KIND, 3S`);
  })

  it('should return THREE OF A KIND, 9S', () => {
    expect(calcThreeOfAKind(data.successNum)).to.equal(`THREE OF A KIND, 9S`);
  })

  it('should return false (one pair)', () => {
    expect(calcThreeOfAKind(data.failOnePair)).to.equal(false);
  })

  it('should return false (two pair)', () => {
    expect(calcThreeOfAKind(data.failTwoPair)).to.equal(false);
  })

  it('should return false (full house)', () => {
    expect(calcThreeOfAKind(data.failFullHouse)).to.equal(false);
  })

  it('should return false (four of a kind)', () => {
    expect(calcThreeOfAKind(data.failFourOfAKind)).to.equal(false);
  })

  it('should return false (straight)', () => {
    expect(calcThreeOfAKind(data.failStraight)).to.equal(false);
  })

  it('should return false (incomplete)', () => {
    expect(calcThreeOfAKind(data.failIncomplete)).to.equal(false);
  })

  it('should return false (null)', () => {
    expect(calcThreeOfAKind(data.null)).to.equal(false);
  })

})
