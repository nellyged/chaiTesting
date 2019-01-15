const expect = require('chai').expect;
function Q() {
  this.enq = () => {};
}
describe('Q', () => {
  it('exists', () => {
    expect(Q).to.be.ok;
  });
  it('exists', () => {
    let q = new Q();
    q.enq('moe');
  });
});
