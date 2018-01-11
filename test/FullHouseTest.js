import { expect } from 'chai';
import calcFullHouse from '../public/fullHouse';

let data = {
  success2FaceCard: {
    '13': 3,
    '1': 2
  },
  success1FaceCard: {
    '11': 3,
    '2': 2
  },
  successNumCards: {
    '9': 3,
    '8': 2
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
  failFourOfAKind: {
    '13': 1,
    '12': 4
  },
  failStraight: {
    '13': 1,
    '12': 1,
    '11': 1,
    '10': 1,
    '9': 1
  },
  failIncomplete: {
    '13': 2
  },
  null: {}
}

describe('calcFullHouse', () => {

  it('should return FULL HOUSE, KS OVER AS', () => {
    expect(calcFullHouse(data.success2FaceCard)).to.equal(`FULL HOUSE, KS OVER AS`);
  })

  it('should return FULL HOUSE, JS OVER 2S', () => {
    expect(calcFullHouse(data.success1FaceCard)).to.equal(`FULL HOUSE, JS OVER 2S`);
  })

  it('should return FULL HOUSE, 9S OVER 8S', () => {
    expect(calcFullHouse(data.successNumCards)).to.equal(`FULL HOUSE, 9S OVER 8S`);
  })

  it('should return false (one pair)', () => {
    expect(calcFullHouse(data.failOnePair)).to.equal(false);
  })

  it('should return false (two pair)', () => {
    expect(calcFullHouse(data.failTwoPair)).to.equal(false);
  })

  it('should return false (three of a kind)', () => {
    expect(calcFullHouse(data.failThreeOfAKind)).to.equal(false);
  })

  it('should return false (four of a kind)', () => {
    expect(calcFullHouse(data.failFourOfAKind)).to.equal(false);
  })

  it('should return false (straight)', () => {
    expect(calcFullHouse(data.failStraight)).to.equal(false);
  })

  it('should return false (incomplete)', () => {
    expect(calcFullHouse(data.failIncomplete)).to.equal(false);
  })

  it('should return false (null)', () => {
    expect(calcFullHouse(data.null)).to.equal(false);
  })
})
