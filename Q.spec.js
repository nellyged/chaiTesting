const expect = require('chai').expect;
const Q = require('./Q');

describe('Q', () => {
  it('exists', () => {
    expect(Q).to.be.ok;
  });
  it('exists', () => {
    let q = new Q();
    q.enq('moe');
  });
});
