import { expect } from 'chai';
import calcFourOfAKind from '../public/fourOfAKind';

let data = {
  successFaceCard1: {
    '13': 4,
    '1': 1
  },
  successFaceCard2: {
    '1': 4,
    '2': 1
  },
  successNumCard1: {
    '9': 4,
    '8': 1
  },
  successNumCard2: {
    '7': 4,
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
  failThreeOfAKind: {
    '13': 1,
    '12': 1,
    '11': 3
  },
  failFullHouse: {
    '9': 3,
    '8': 2
  },
  failStraight: {
    '13': 1,
    '12': 1,
    '11': 1,
    '10': 1,
    '9': 1
  },
  failIncomplete: {
    '13': 4
  },
  null: {}
}

describe('calcFourOfAKind', () => {

  it('should return FOUR OF A KIND, K', () => {
    expect(calcFourOfAKind(data.successFaceCard1)).to.equal(`FOUR OF A KIND, K`);
  })

  it('should return FOUR OF A KIND, A', () => {
    expect(calcFourOfAKind(data.successFaceCard2)).to.equal(`FOUR OF A KIND, A`);
  })

  it('should return FOUR OF A KIND, 9', () => {
    expect(calcFourOfAKind(data.successNumCard1)).to.equal(`FOUR OF A KIND, 9`);
  })

  it('should return FOUR OF A KIND, 7', () => {
    expect(calcFourOfAKind(data.successNumCard2)).to.equal(`FOUR OF A KIND, 7`);
  })

  it('should return false (one pair)', () => {
    expect(calcFourOfAKind(data.failOnePair)).to.equal(false);
  })

  it('should return false (two pair)', () => {
    expect(calcFourOfAKind(data.failTwoPair)).to.equal(false);
  })

  it('should return false (three of a kind)', () => {
    expect(calcFourOfAKind(data.failThreeOfAKind)).to.equal(false);
  })

  it('should return false (full house)', () => {
    expect(calcFourOfAKind(data.failFullHouse)).to.equal(false);
  })

  it('should return false (straight)', () => {
    expect(calcFourOfAKind(data.failStraight)).to.equal(false);
  })

  it('should return false (incomplete)', () => {
    expect(calcFourOfAKind(data.failIncomplete)).to.equal(false);
  })

  it('should return false (null)', () => {
    expect(calcFourOfAKind(data.null)).to.equal(false);
  })

})
