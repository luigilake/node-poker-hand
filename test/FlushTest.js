import { expect } from 'chai';
import calcFlush from '../public/flush';

let data = {
  flush: {
    'HEARTS': 5
  },
  fail1: {
    'HEARTS': 4,
    'SPADES': 1
  },
  fail2: {
    'HEARTS': 3,
    'SPADES': 2
  },
  fail3: {
    'HEARTS': 2,
    'SPADES': 2,
    'CLUBS': 1,
  },
  fail4: {
    'HEARTS': 2,
    'SPADES': 1,
    'CLUBS': 1,
    'DIAMONDS': 1
  },
}

describe('calcFlush', () => {
  it('should return FLUSH', () => {
    expect(calcFlush(data.flush)).to.equal('FLUSH');
  })

  it('should return false', () => {
    expect(calcFlush(data.fail1)).to.equal(false);
  })

  it('should return false', () => {
    expect(calcFlush(data.fail2)).to.equal(false);
  })

  it('should return false', () => {
    expect(calcFlush(data.fail3)).to.equal(false);
  })

  it('should return false', () => {
    expect(calcFlush(data.fail4)).to.equal(false);
  })
})
