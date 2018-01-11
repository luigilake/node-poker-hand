import { expect } from 'chai';
import pairCount from '../public/pairCount';

let data = {
  successFaceOnePair: {
    '13': 2,
    '12': 1,
    '11': 1,
    '10': 1
  },
  successNumOnePair: {
    '9': 2,
    '12': 1,
    '11': 1,
    '10': 1
  },
  successFaceTwoPair: {
    '13': 2,
    '12': 2,
    '11': 1,
  },
  successNumTwoPair: {
    '9': 2,
    '7': 2,
    '8': 1,
  },
  failThreeOfAKind: {
    '9': 3,
    '7': 1,
    '8': 1
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

describe('pairCount', () => {

  it('should return ONE PAIR, KS', () => {
    expect(pairCount(data.successFaceOnePair)).to.equal(`ONE PAIR, KS`);
  })

  it('should return ONE PAIR, 9S', () => {
    expect(pairCount(data.successNumOnePair)).to.equal(`ONE PAIR, 9S`);
  })

  it('should return TWO PAIR, KS AND QS', () => {
    expect(pairCount(data.successFaceTwoPair)).to.equal(`TWO PAIR, KS AND QS`);
  })

  it('should return TWO PAIR, 9S AND 7S', () => {
    expect(pairCount(data.successNumTwoPair)).to.equal(`TWO PAIR, 9S AND 7S`);
  })

  it('should return false (three of a kind)', () => {
    expect(pairCount(data.failThreeOfAKind)).to.equal(false);
  })

  it('should return false (full house)', () => {
    expect(pairCount(data.failFullHouse)).to.equal(false);
  })

  it('should return false (four of a kind)', () => {
    expect(pairCount(data.failFourOfAKind)).to.equal(false);
  })

  it('should return false (straight)', () => {
    expect(pairCount(data.failStraight)).to.equal(false);
  })

  it('should return false (incomplete)', () => {
    expect(pairCount(data.failIncomplete)).to.equal(false);
  })

  it('should return false (null)', () => {
    expect(pairCount(data.null)).to.equal(false);
  })

})
